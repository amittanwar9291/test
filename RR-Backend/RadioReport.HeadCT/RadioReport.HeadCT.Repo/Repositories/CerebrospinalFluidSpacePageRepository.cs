using Microsoft.Extensions.Logging;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Logic.MinIO;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.HeadCT.Domain.Interfaces;
using RadioReport.HeadCT.Domain.Models;
using System;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace RadioReport.HeadCT.Repo.Repositories
{
    public class CerebrospinalFluidSpacePageRepository : PageWithImageRepositoryBase<CerebrospinalFluidSpacePage, CerebrospinalFluidSpaceFinding>, ICerebrospinalFluidSpacePageRepository
    {
        public CerebrospinalFluidSpacePageRepository(HeadCTDbContext dbContext, IMinIOWrapper minIOWrapper, ILogger<CerebrospinalFluidSpacePageRepository> logger)
            : base(dbContext, minIOWrapper, nameof(HeadCT), logger)
        {
        }

        protected override Expression<Func<Guid, CerebrospinalFluidSpaceFinding, bool>> HasImageFile => (Guid imageFileId, CerebrospinalFluidSpaceFinding f) => f.ImageFileId == imageFileId;

        public override async Task Delete(Guid id)
        {
            var toRemove = await GetByIdAsync(id, new[]
            {
                nameof(CerebrospinalFluidSpacePage.Findings),
                nameof(CerebrospinalFluidSpacePage.Findings) + "." + nameof(CerebrospinalFluidSpaceFinding.ImageFile),
            });

            if (toRemove != null)
            {
                var toRemoveFromFindings = toRemove.Findings?.ToList().FindAll(p => p.ImageFileId.HasValue) ?? Enumerable.Empty<CerebrospinalFluidSpaceFinding>();

                foreach (var findingWithImage in toRemoveFromFindings)
                {
                    await RemoveImageFile(findingWithImage.ImageFileId.Value);
                }

                DataContext.Set<CerebrospinalFluidSpacePage>().Remove(toRemove);
            }
            else
            {
                throw new NotFoundException("Page with given id does not exist in database");
            }
        }

        public override async Task<CerebrospinalFluidSpacePage> GetByIdAsync(Guid id, string[] includes, Expression<Func<CerebrospinalFluidSpacePage, bool>> predicate = null) =>
            await GetByIdAsync(id, includes, false);

        public override async Task<CerebrospinalFluidSpacePage> GetByIdAsync(Guid id, string[] includes, bool getStream)
        {
            var pageModel = await base.GetByIdAsync(id, includes);

            if (pageModel == null)
            {
                return null;
            }

            if (getStream)
            {
                var isAnyUploadedFile = pageModel.Findings?.Any(f => f.ImageFile != null) ?? false;
                if (isAnyUploadedFile)
                {
                    var findingsWithFile = pageModel.Findings.ToList().FindAll(p => p.ImageFile?.Id != null);
                    foreach (var finding in findingsWithFile)
                    {
                        finding.ImageFile = await GetImageFile(finding.ImageFileId.Value);
                    }
                }
            }

            return pageModel;
        }

        protected override void UpdateCollections(CerebrospinalFluidSpacePage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));

            foreach (var finding in model.Findings?.Where(f => f.IsDeleted && f.ImageFileId != null) ?? Enumerable.Empty<CerebrospinalFluidSpaceFinding>())
            {
                RemoveImageFile(finding.ImageFileId.Value).Wait();
            }
            UpdateCollection(model.Findings);
        }
    }
}
