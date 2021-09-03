using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Minio;
using Minio.Exceptions;
using RadioReport.Common.Consts;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.Common.Module.Logic.Helpers;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using System.Transactions;
using RadioReport.Common.Logic.MinIO;

namespace RadioReport.Common.Module.Repository.Repositories
{
    public abstract class PageWithImageRepositoryBase<TPageModel, TModel> : PageRepositoryBase<TPageModel>, IImageFileRepository<TPageModel, ImageFile>
        where TPageModel : PageModelBase
        where TModel : ModelBase, IImageFileContainer
    {
        protected const string BucketName = "images";
        protected const string MiniatureSuffix = "min";

        /// <summary>
        /// Expression which is used by entity framework to filter out entities containing given imagefile on db side.
        /// Used in RemoveImageFile method to find out which entity of current set contains imagefile to be removed.
        /// Guid parameter is guid of image file.
        /// TModel parameter is enitity containing image file.
        /// Result should indicate if given entity contains image with given id.
        /// For example implementation see Shoulder 4 repository. 
        /// </summary>
        protected abstract Expression<Func<Guid, TModel, bool>> HasImageFile { get; }

        protected MinioClient MinIOClient { get; private set; }
        protected ILogger<PageWithImageRepositoryBase<TPageModel, TModel>> Logger { get; private set; }
        protected string ModuleName { get; private set; }
        protected Queue<(string, Func<Task>)> QueuedMinIOOperations { get; private set; }

        protected PageWithImageRepositoryBase(DbContext dbContext, IMinIOWrapper minIOWrapper, string moduleName, ILogger<PageWithImageRepositoryBase<TPageModel, TModel>> logger) : base(dbContext)
        {
            var culture = new CultureInfo("en-GB");
            MinIOClient = minIOWrapper?.MinIOClient ?? default;
            Logger = logger;
            ModuleName = moduleName?.ToLower(culture) ?? default;
            QueuedMinIOOperations = new Queue<(string, Func<Task>)>();
        }

        public virtual async Task<ImageFile> AddImageFile(IImageFileContainer imageFileContainer, ImageSaveDto image)
        {
            if (imageFileContainer is null)
            {
                throw new ArgumentNullException(nameof(imageFileContainer));
            }

            if (image is null)
            {
                throw new ArgumentNullException(nameof(image));
            }

            await EnsureBucketExists(BucketName);
            TModel targetEntity = imageFileContainer is TModel model ?
                model : DataContext.Set<TModel>().FirstOrDefault(x => x.Id == imageFileContainer.Id);

            var fileTypePath = image.FileType == null ? string.Empty : $@"/{image.FileType}";
            var imageFile = new ImageFile
            {
                FileName = image.FileName,
                ObjectName = $"{ModuleName}/{typeof(TModel).Name}{fileTypePath}/{imageFileContainer.Id}"
            };

            QueuedMinIOOperations.Enqueue((BucketName + "/" + imageFile.ObjectName, async () => {
                await MinIOClient.PutObjectAsync(BucketName, imageFile.ObjectName + MiniatureSuffix, image.MiniatureImage, image.MiniatureImage.Length);
                await MinIOClient.PutObjectAsync(BucketName, imageFile.ObjectName, image.OriginalImage, image.OriginalImage.Length);
                await image.OriginalImage.DisposeAsync();
                await image.MiniatureImage.DisposeAsync();
            }));

            var result = DataContext.Add(imageFile).Entity;
            imageFile.Id = result.Id;
            targetEntity.SetImageFile(result, image.FileType);
            DataContext.Set<TModel>().Update(targetEntity);

            return imageFile;
        }

        public async Task<ImageFile> GetImageFile(Guid imageFileId, ImageDownloadType imageDownloadType = ImageDownloadType.Miniature)
        {
            var imageFile = await DataContext.Set<ImageFile>().FirstOrDefaultAsync(i => i.Id == imageFileId);

            if (imageFile == null)
            {
                return null;
            }

            bool hasMiniature = true;

            Action<Stream> getCallback = stream =>
            {
                using var memStream = new MemoryStream();

                if (imageDownloadType == ImageDownloadType.Miniature && !hasMiniature)
                {
                    using var resizedImageStream = ImageFileHelper.ResizeImage(stream, 0, ConfigurationConsts.ImageMiniatureHeightInPixels);
                    resizedImageStream.Position = 0;
                    resizedImageStream.CopyTo(memStream);
                }
                else
                {
                    stream.CopyTo(memStream);
                }

                imageFile.Stream = memStream.ToArray();
            };

            if (imageDownloadType == ImageDownloadType.Miniature)
            {
                try
                {
                    await MinIOClient.GetObjectAsync(BucketName, imageFile.ObjectName + MiniatureSuffix, getCallback);
                }
                catch (MinioException)
                {
                    hasMiniature = false;
                }
            }

            if (imageDownloadType == ImageDownloadType.FullSized || !hasMiniature)
            {
                await MinIOClient.GetObjectAsync(BucketName, imageFile.ObjectName, getCallback);
            }

            return imageFile;
        }

        public async Task<IImageFileContainer> GetImageContainingEntity(Guid containerId) =>
            await DataContext.Set<TModel>().FirstOrDefaultAsync(x => x.Id == containerId);

        public virtual async Task RemoveImageFile(Guid imageFileId)
        {
            var file = await DataContext.Set<ImageFile>().FirstOrDefaultAsync(m => m.Id == imageFileId);
            
            if (file == null)
            {
                throw new NotFoundException("File with given id does not exist");
            }

            var entityParameter = Expression.Parameter(typeof(TModel), null);
            var partiallyAppliedExpression = Expression.Invoke(HasImageFile, Expression.Constant(imageFileId), entityParameter);
            var predicate = Expression.Lambda<Func<TModel, bool>>(partiallyAppliedExpression, entityParameter);
            var entityWithImage = await DataContext.Set<TModel>().FirstOrDefaultAsync(predicate);

            if (entityWithImage != null)
            {
                entityWithImage.DropImageFile(imageFileId);
                DataContext.Set<TModel>().Update(entityWithImage);
            }

            DataContext.Remove(file);
            QueuedMinIOOperations.Enqueue((BucketName + "/" + file.ObjectName, async() => {
                await MinIOClient.RemoveObjectAsync(BucketName, file.ObjectName + MiniatureSuffix);
                await MinIOClient.RemoveObjectAsync(BucketName, file.ObjectName);
            }));
        }

        public async Task RemoveImageFileRange(IEnumerable<Guid> idsToDelete)
        {
            foreach (var id in idsToDelete ?? Enumerable.Empty<Guid>())
            {
                await RemoveImageFile(id);
            }
        }
        
        public async override Task<int> SaveChangesAsync()
        {
            var repoResult = 0;
            var minioResult = 0;

            // If DB fails, this will throw, and changes on MinIO won't be executed
            // If MinIO fails transaction on db will be rolled back thanks to transaction scope mechanism
            using (TransactionScope scope = new TransactionScope(
                TransactionScopeOption.Required,
                new TransactionOptions { IsolationLevel = IsolationLevel.ReadCommitted },
                TransactionScopeAsyncFlowOption.Enabled))
            {
                repoResult = await base.SaveChangesAsync();
                minioResult = await CommitMinIOOperations();
                scope.Complete();
            }

            return minioResult + repoResult;
        }

        protected async Task EnsureBucketExists(string bucketName)
        {
            if (!await MinIOClient.BucketExistsAsync(bucketName))
            {
                await MinIOClient.MakeBucketAsync(bucketName);
            }
        }

        protected async Task<int> CommitMinIOOperations()
        {
            var successfulOperations = 0;
            while (QueuedMinIOOperations.TryDequeue(out (string id, Func<Task> task) operation))
            {
                try
                {
                    await operation.task();
                    successfulOperations++;
                }
                catch (MinioException me)
                {
                    // If already something was deleted do not throw
                    // to avoid false references in db
                    if (successfulOperations == 0)
                    {
                        throw;
                    }
                    
                    Logger.LogError(me, $"MinIO operation on file {operation.id} has failed, please check MinIO storage for consistency");
                }
            }
            return successfulOperations;
        }

        public abstract Task<TPageModel> GetByIdAsync(Guid id, string[] includes, bool getStream);

        public new abstract Task Delete(Guid id);
    }
}
