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
    public class VesselsPageRepository : PageWithImageRepositoryBase<VesselsPage, VesselsFinding>, IVesselsPageRepository
    {
        public VesselsPageRepository(HeadCTDbContext dbContext, IMinIOWrapper minIOWrapper, ILogger<VesselsPageRepository> logger) 
            : base(dbContext, minIOWrapper, nameof(HeadCT), logger)
        {
        }

        protected override Expression<Func<Guid, VesselsFinding, bool>> HasImageFile => (Guid imageFileId, VesselsFinding f) =>
            f.ImageFileId == imageFileId || f.Perfusion01ImageFileId == imageFileId || f.Perfusion02ImageFileId == imageFileId;

        public override async Task Delete(Guid id)
        {
            var toRemove = await GetByIdAsync(id, new[]
            {
                nameof(VesselsPage.Findings),
                nameof(VesselsPage.Findings) + "." + nameof(VesselsFinding.ImageFile),
                nameof(VesselsPage.Findings) + "." + nameof(VesselsFinding.Perfusion01ImageFile),
                nameof(VesselsPage.Findings) + "." + nameof(VesselsFinding.Perfusion02ImageFile)
            });

            if (toRemove != null)
            {
                var toRemoveFromFindings = toRemove.Findings?.ToList().FindAll(p => p.HasImages) ?? Enumerable.Empty<VesselsFinding>();

                foreach (var findingWithImage in toRemoveFromFindings)
                {
                    var imageIds = findingWithImage.ImageIds;
                    foreach (var imageId in imageIds)
                    {
                        await RemoveImageFile(imageId);
                    }
                }

                DataContext.Set<VesselsPage>().Remove(toRemove);
            }
            else
            {
                throw new NotFoundException("Page with given id does not exist in database");
            }
        }

        public override async Task<VesselsPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<VesselsPage, bool>> predicate = null) => await GetByIdAsync(id, includes, false);

        public override async Task<VesselsPage> GetByIdAsync(Guid id, string[] includes, bool getStream)
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
                    var findingsWithFile = pageModel.Findings.ToList().FindAll(p => p.HasImages);
                    foreach (var finding in findingsWithFile)
                    {
                        finding.ImageFile = await GetImageFile(finding.ImageFileId.GetValueOrDefault());
                        finding.Perfusion01ImageFile = await GetImageFile(finding.Perfusion01ImageFileId.GetValueOrDefault());
                        finding.Perfusion02ImageFile = await GetImageFile(finding.Perfusion02ImageFileId.GetValueOrDefault());
                    }
                }
            }

            return pageModel;
        }

        protected override void UpdateCollections(VesselsPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));

            foreach (var finding in model.Findings?.Where(f => f.IsDeleted && f.HasImages) ?? Enumerable.Empty<VesselsFinding>())
            {
                foreach (var id in finding.ImageIds)
                {
                    RemoveImageFile(id).Wait();
                }
            }
            UpdateCollection(model.Findings);
        }
    }
}
