using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.AbdomenMRT.Domain.Interfaces;
using RadioReport.AbdomenMRT.Domain.Models;
using System.Threading.Tasks;
using System;
using System.Linq;
using System.Linq.Expressions;
using Microsoft.Extensions.Logging;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Logic.MinIO;

namespace RadioReport.AbdomenMRT.Repo.Repositories
{
    public class PeritonealCavityPageRepository : PageWithImageRepositoryBase<PeritonealCavityPage, PeritonealCavityFinding>, IPeritonealCavityPageRepository
    {
        public PeritonealCavityPageRepository(AbdomenMRTDbContext dbContext, IMinIOWrapper minIOWrapper, ILogger<PeritonealCavityPageRepository> logger) 
        : base(dbContext, minIOWrapper, nameof(AbdomenMRT), logger)
        {
        }
        
        protected override Expression<Func<Guid, PeritonealCavityFinding, bool>> HasImageFile =>
            (Guid imageFileId, PeritonealCavityFinding finding) => imageFileId == finding.ImageFileId;

        public override async Task<PeritonealCavityPage> GetByIdAsync(Guid id, string[] includes, bool getStream)
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

        protected override void UpdateCollections(PeritonealCavityPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));

            foreach (var finding in model.Findings?.Where(f => f.IsDeleted && f.ImageFileId != null) ?? Enumerable.Empty<PeritonealCavityFinding>())
            {
                RemoveImageFile(finding.ImageFileId.Value).Wait();
            }

            UpdateCollection(model.Findings);
        }

        public override async Task Delete(Guid id)
        {
            var toRemove = await GetByIdAsync(id, new[] { nameof(PeritonealCavityPage.Findings), nameof(PeritonealCavityPage.Findings) + "." + nameof(PeritonealCavityFinding.UploadedImageFile) });
            if (toRemove != null)
            {
                var toRemoveFromFindings = toRemove.Findings?.ToList().FindAll(p => p.ImageFileId.HasValue) ?? Enumerable.Empty<PeritonealCavityFinding>();

                foreach (var findingWithImage in toRemoveFromFindings)
                {
                    await RemoveImageFile(findingWithImage.ImageFileId.Value);
                }

                DataContext.Set<PeritonealCavityPage>().Remove(toRemove);
            }
            else
            {
                throw new NotFoundException("Page with given id does not exist in database");
            }
        }
    }
}
