using System;
using System.Linq.Expressions;
using System.Threading.Tasks;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.CardioMRT.Domain.Interfaces;
using RadioReport.CardioMRT.Domain.Models;
using System.Linq;
using RadioReport.Common.Exceptions;
using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using RadioReport.Common.Logic.MinIO;

namespace RadioReport.CardioMRT.Repo.Repositories
{
    public class SpatialRequirementPageRepository : PageWithImageRepositoryBase<SpatialRequirementPage, SpatialRequirementFinding>, ISpatialRequirementPageRepository
    {
        public SpatialRequirementPageRepository(CardioMRTDbContext dbContext, IMinIOWrapper minIOWrapper, ILogger<SpatialRequirementPageRepository> logger)
            : base(dbContext, minIOWrapper, nameof(CardioMRT), logger)
        {
        }

        protected override Expression<Func<Guid, SpatialRequirementFinding, bool>> HasImageFile => (Guid imageFileId, SpatialRequirementFinding f) =>
            f.ImageFileId == imageFileId;

        public override async Task Delete(Guid id)
        {
            var imageFilePropertyPath = nameof(SpatialRequirementPage.Findings) + "." + nameof(SpatialRequirementFinding.UploadedImageFile);
            var toRemove = await GetByIdAsync(id, new[]
            {
                nameof(SpatialRequirementPage.Findings),
                imageFilePropertyPath
            });

            if (toRemove != null)
            {
                var toRemoveFromFindings = toRemove.Findings?.ToList().FindAll(p => p.ImageFileId.HasValue) ?? Enumerable.Empty<SpatialRequirementFinding>();

                foreach (var findingWithImage in toRemoveFromFindings)
                {
                    await RemoveImageFile(findingWithImage.ImageFileId.Value);
                }

                DataContext.Set<SpatialRequirementPage>().Remove(toRemove);
            }
            else
            {
                throw new NotFoundException("Page with given id does not exist in database");
            }
        }

        public override async Task<SpatialRequirementPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<SpatialRequirementPage, bool>> predicate = null) =>
            await GetByIdAsync(id, includes, false);

        public override async Task<SpatialRequirementPage> GetByIdAsync(Guid id, string[] includes, bool getStream)
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
                    var filesIds = new List<Guid?>();
                    var findingsWithFile = pageModel.Findings.ToList().FindAll(p => p.UploadedImageFile?.Id != null);
                    foreach (var finding in findingsWithFile)
                    {
                        finding.UploadedImageFile = await GetImageFile(finding.ImageFileId.Value);
                    }
                }
            }

            return pageModel;
        }

        protected override void UpdateCollections(SpatialRequirementPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));
            
            foreach (var finding in model.Findings?.Where(f => f.IsDeleted && f.ImageFileId != null) ?? Enumerable.Empty<SpatialRequirementFinding>())
            {
                RemoveImageFile(finding.ImageFileId.Value).Wait();
            }
            UpdateCollection(model.Findings);
        }
    }
}
