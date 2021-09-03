using Microsoft.AspNetCore.Http;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.IO;
using System.Linq.Expressions;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.Common.Consts;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Helpers;

namespace RadioReport.Common.Module.Logic.Managers
{
    /// <summary>
    /// Default implementation for case when one file per entity
    /// </summary>
    public abstract class PageWithImageManagerBase<TModel, TRepository> : PageManagerBase<TModel, TRepository>, IPageWithImageManager<TModel>
        where TModel : PageModelBase
        where TRepository : IPageRepository<TModel>, IImageFileRepository<TModel, ImageFile>
    {
        protected PageWithImageManagerBase(
            IReportManager reportManager,
            IReportService reportService,
            TRepository repository,
            IKafkaProducer kafkaProducer,
            HttpAuthContext httpAuthContext,
            ModuleContext moduleContext
        )
            : base(reportManager, reportService, repository, kafkaProducer, httpAuthContext, moduleContext)
        {
        }

        public virtual async Task<ImageFile> AddImageFile(Guid reportId, Guid entityId, IFormFile file, string fileType = null)
        {
            if (file == null) throw new ArgumentNullException(nameof(file));

            var imageContainingEntity = await Repository.GetImageContainingEntity(entityId);
            if (imageContainingEntity == null)
            {
                throw new NotFoundException("Specified entity does not exist");
            }

            var existingImageGuid = imageContainingEntity.GetImageFileGuid(fileType);
            if (existingImageGuid.HasValue)
            {
                await Repository.RemoveImageFile(existingImageGuid.Value);
            }

            var memoryStreamOgImage = new MemoryStream();
            await file.CopyToAsync(memoryStreamOgImage);
            memoryStreamOgImage.Position = 0;

            // 0 means it automatically determines the correct opposite dimensions size to preserve the original aspect ratio
            var memoryStreamResizedImage = await ImageFileHelper.ResizeImageAsync(memoryStreamOgImage, 0, ConfigurationConsts.ImageMiniatureHeightInPixels);
            memoryStreamOgImage.Position = 0;
            memoryStreamResizedImage.Position = 0;

            var imageSaveDto = new ImageSaveDto
            {
                FileName = file.FileName,
                FileType = fileType,
                OriginalImage = memoryStreamOgImage,
                MiniatureImage = memoryStreamResizedImage
            };

            var imageFile = await Repository.AddImageFile(imageContainingEntity, imageSaveDto);
            await Repository.SaveChangesAsync();

            await ReportService.ClearReportApproval(reportId);

            return imageFile;
        }

        public virtual async Task RemoveImageFile(Guid reportId, Guid imageFileId)
        {
            await Repository.RemoveImageFile(imageFileId);
            await Repository.SaveChangesAsync();

            await ReportService.ClearReportApproval(reportId);
        }

        public async Task RemoveImageFileRange(Guid reportId, IEnumerable<Guid> idsToDelete)
        {
            await Repository.RemoveImageFileRange(idsToDelete);
            await Repository.SaveChangesAsync();

            if (reportId != Guid.Empty)
            {
                await ReportService.ClearReportApproval(reportId);
            }
        }

        public virtual async Task<ImageFile> GetImageFile(Guid imageFileId, ImageDownloadType imageDownloadType) =>
            await Repository.GetImageFile(imageFileId, imageDownloadType);

        public override async Task RemoveAsync(Guid id)
        {
            // HACK: In case of Image repo we need to use TASK Delete (while normal repo interface declares VOID Delete)
            // Unfortunately C# compiler has problem distinguishing between Task and void method,
            // hence this assignemt to expliclity tell compiler which Delete implementation to use
            IImageFileRepository<TModel, ImageFile> repo = Repository;
            await repo.Delete(id);
            await Repository.SaveChangesAsync();
        }

        public override async Task<TModel> GetByIdAsync(Guid id, Expression<Func<TModel, bool>> predicate = null)
        {
            var includes = GetIncludes();
            var result = await Repository.GetByIdAsync(id, includes);
            return result;
        }

        public override async Task<IEnumerable<RadioReportValue>> GetValuesForReport(Guid id)
        {
            var includes = GetIncludes();
            var model = await Repository.GetByIdAsync(id, includes, true);

            List<RadioReportValue> result = new List<RadioReportValue>();
            if (model != null)
            {
                result.AddRange(RadioReportIdAttributeReader.GetValuesFromAllProperties(model));
            }
            return result;
        }

        protected abstract string[] GetIncludes();
    }
}
