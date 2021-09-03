using System;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Logic.MinIO;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.NeckMRT.Domain.Interfaces;
using RadioReport.NeckMRT.Domain.Models;

namespace RadioReport.NeckMRT.Repo.Repositories
{
    public class LymphNodesPageRepository : PageWithImageRepositoryBase<LymphNodesPage, LymphNodesFinding>, ILymphNodesPageRepository
    {
        public LymphNodesPageRepository(NeckMRTDbContext dbContext, IMinIOWrapper minIOWrapper, ILogger<LymphNodesPageRepository> logger)
            : base(dbContext, minIOWrapper, nameof(NeckMRT), logger)
        {
        }

        protected override Expression<Func<Guid, LymphNodesFinding, bool>> HasImageFile => (Guid imageFileId, LymphNodesFinding f) =>
            f.ImageFileId == imageFileId;

        public override async Task Delete(Guid id)
        {
            var imageFilePropertyPath = nameof(LymphNodesPage.Findings) + "." +
                                        nameof(LymphNodesFinding.UploadedImageFile);
            var toRemove = await GetByIdAsync(id, new[]
            {
                nameof(LymphNodesPage.Findings),
                imageFilePropertyPath
            });

            if (toRemove != null)
            {
                var toRemoveFromFindings = toRemove.Findings?.ToList().FindAll(p => p.ImageFileId.HasValue) ??
                                           Enumerable.Empty<LymphNodesFinding>();

                foreach (var findingWithImage in toRemoveFromFindings)
                {
                    await RemoveImageFile(findingWithImage.ImageFileId.Value);
                }

                DataContext.Set<LymphNodesPage>().Remove(toRemove);
            }
            else
            {
                throw new NotFoundException("Page with given id does not exist in database");
            }
        }

        public override async Task<LymphNodesPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<LymphNodesPage, bool>> predicate = null) =>
            await GetByIdAsync(id, includes, false);

        public override async Task<LymphNodesPage> GetByIdAsync(Guid id, string[] includes, bool getStream)
        {
            var pageModel = await base.GetByIdAsync(id, includes);

            if (pageModel == null)
            {
                return null;
            }

            if (getStream)
            {
                var isAnyUploadedFile = pageModel.Findings?.Any(f => f.UploadedImageFile != null) ?? false;
                if (isAnyUploadedFile)
                {
                    var findingsWithFile = pageModel.Findings.ToList().FindAll(p => p.UploadedImageFile?.Id != null);
                    foreach (var finding in findingsWithFile)
                    {
                        finding.UploadedImageFile = await GetImageFile(finding.ImageFileId.Value);
                    }
                }
            }

            return pageModel;
        }

        protected override void UpdateCollections(LymphNodesPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));
            
            foreach (var finding in model.Findings?.Where(f => f.IsDeleted && f.ImageFileId != null) ?? Enumerable.Empty<LymphNodesFinding>())
            {
                RemoveImageFile(finding.ImageFileId.Value).Wait();
            }
            UpdateCollection(model.Findings);
        }
    }
}
