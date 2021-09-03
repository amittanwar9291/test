using Microsoft.Extensions.Logging;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.SpineMRT.Domain.Interfaces;
using RadioReport.SpineMRT.Domain.Models;
using System;
using System.Linq.Expressions;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RadioReport.Common.Logic.MinIO;

namespace RadioReport.SpineMRT.Repo.Repositories
{
    public class DiscPageRepository : PageWithImageRepositoryBase<DiscPage, DiscFinding>, IDiscPageRepository
    {
        public DiscPageRepository(SpineMRTDbContext dbContext, IMinIOWrapper minIOWrapper, ILogger<DiscPageRepository> logger) : base(dbContext, minIOWrapper, nameof(SpineMRT), logger)
        {
        }

        protected override Expression<Func<Guid, DiscFinding, bool>> HasImageFile => (Guid imageFileId, DiscFinding d) =>
         d.AnteriorImageFileId == imageFileId || d.PosteriorImageFileId == imageFileId || d.MarginalisImageFileId == imageFileId ||
         d.DiscitisImageFileId == imageFileId || d.PeriostitisImageFileId == imageFileId;

        public override async Task Delete(Guid id)
        {
            var posteriorImageFilePropertyPath = nameof(DiscPage.Findings) + "." + nameof(DiscFinding.AnteriorImageFile);
            var anteriorImageFilePropertyPath = nameof(DiscPage.Findings) + "." + nameof(DiscFinding.PosteriorImageFile);
            var marginalisImageFilePropertyPath = nameof(DiscPage.Findings) + "." + nameof(DiscFinding.MarginalisImageFile);
            var discitisImageFilePropertyPath = nameof(DiscPage.Findings) + "." + nameof(DiscFinding.DiscitisImageFile);
            var periostitisImageFilePropertyPath = nameof(DiscPage.Findings) + "." + nameof(DiscFinding.PeriostitisImageFile);
            var toRemove = await GetByIdAsync(id, new[]
            {
                nameof(DiscPage.Findings),
                posteriorImageFilePropertyPath,
                anteriorImageFilePropertyPath,
                marginalisImageFilePropertyPath,
                discitisImageFilePropertyPath,
                periostitisImageFilePropertyPath
            });
            
            if (toRemove != null)
            {
                var toRemoveFromFindings = toRemove.Findings?.ToList().FindAll(p => p.HasImages) ?? Enumerable.Empty<DiscFinding>();

                foreach (var findingWithImage in toRemoveFromFindings)
                {
                    var imageIds = findingWithImage.ImageIds;
                    foreach (var imageId in imageIds)
                    {
                        await RemoveImageFile(imageId);
                    }
                }

                DataContext.Set<DiscPage>().Remove(toRemove);
            }
            else
            {
                throw new NotFoundException("Page with given id does not exist in database");
            }
        }

        public override async Task<DiscPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<DiscPage, bool>> predicate = null) => await GetByIdAsync(id, includes, false);

        public override async Task<DiscPage> GetByIdAsync(Guid id, string[] includes, bool getStream)
        {
            var pageModel = await base.GetByIdAsync(id, includes);

            if (pageModel == null)
            {
                return null;
            }

            if (getStream)
            {
                var isAnyUploadedFile = pageModel.Findings?.Any(f => f.HasImages) ?? false;
                if (isAnyUploadedFile)
                {
                    var filesIds = new List<Guid?>();
                    var findingsWithFile = pageModel.Findings.ToList().FindAll(p => p.HasImages);
                    foreach (var finding in findingsWithFile)
                    {
                        finding.AnteriorImageFile = await GetImageFile(finding.AnteriorImageFileId.GetValueOrDefault());
                        finding.PosteriorImageFile = await GetImageFile(finding.PosteriorImageFileId.GetValueOrDefault());
                        finding.MarginalisImageFile = await GetImageFile(finding.MarginalisImageFileId.GetValueOrDefault());
                        finding.DiscitisImageFile = await GetImageFile(finding.DiscitisImageFileId.GetValueOrDefault());
                        finding.PeriostitisImageFile = await GetImageFile(finding.PeriostitisImageFileId.GetValueOrDefault());
                    }
                }
            }

            return pageModel;
        }

        protected override void UpdateCollections(DiscPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));
            
            foreach (var finding in model.Findings?.Where(f => f.IsDeleted && f.HasImages) ?? Enumerable.Empty<DiscFinding>())
            {
                foreach(var id in finding.ImageIds)
                {
                    RemoveImageFile(id).Wait();
                }
            }
            UpdateCollection(model.Findings);
        }
    }
}
