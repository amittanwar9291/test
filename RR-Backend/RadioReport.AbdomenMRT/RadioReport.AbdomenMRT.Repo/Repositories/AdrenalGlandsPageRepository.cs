using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.AbdomenMRT.Domain.Interfaces;
using RadioReport.AbdomenMRT.Domain.Models;
using System.Threading.Tasks;
using System;
using System.Linq.Expressions;
using RadioReport.Common.Logic.MinIO;
using System.Linq;
using RadioReport.Common.Exceptions;
using Microsoft.Extensions.Logging;

namespace RadioReport.AbdomenMRT.Repo.Repositories
{
    public class AdrenalGlandsPageRepository : PageWithImageRepositoryBase<AdrenalGlandsPage, AdrenalGlandsFinding>, IAdrenalGlandsPageRepository
    {
        public AdrenalGlandsPageRepository(AbdomenMRTDbContext dbContext, IMinIOWrapper minIOWrapper, ILogger<AdrenalGlandsPageRepository> logger)
            : base(dbContext, minIOWrapper, nameof(AbdomenMRT), logger)
        {
        }

        protected override Expression<Func<Guid, AdrenalGlandsFinding, bool>> HasImageFile => (Guid imageFileId, AdrenalGlandsFinding f) => f.ImageFileId == imageFileId;

        public override async Task Delete(Guid id)
        {
            var imageFilePropertyPath = nameof(AdrenalGlandsPage.Findings) + "." + nameof(AdrenalGlandsFinding.UploadedImageFile);
            var toRemove = await GetByIdAsync(id, new[]
            {
                nameof(AdrenalGlandsPage.Findings),
                imageFilePropertyPath
            });

            if (toRemove != null)
            {
                var toRemoveFromFindings = toRemove.Findings?.ToList().FindAll(p => p.ImageFileId.HasValue) ?? Enumerable.Empty<AdrenalGlandsFinding>();

                foreach (var findingWithImage in toRemoveFromFindings)
                {
                    await RemoveImageFile(findingWithImage.ImageFileId.Value);
                }

                DataContext.Set<AdrenalGlandsPage>().Remove(toRemove);
            }
            else
            {
                throw new NotFoundException("Page with given id does not exist in database");
            }
        }

        public override async Task<AdrenalGlandsPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<AdrenalGlandsPage, bool>> predicate = null) =>
            await GetByIdAsync(id, includes, false);

        public override async Task<AdrenalGlandsPage> GetByIdAsync(Guid id, string[] includes, bool getStream)
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

        protected override void UpdateCollections(AdrenalGlandsPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));

            foreach (var finding in model.Findings?.Where(f => f.IsDeleted && f.ImageFileId != null) ?? Enumerable.Empty<AdrenalGlandsFinding>())
            {
                RemoveImageFile(finding.ImageFileId.Value).Wait();
            }
            UpdateCollection(model.Findings);
        }
    }
}
