using Microsoft.Extensions.Logging;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Logic.MinIO;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.HeadMRT.Domain.Interfaces;
using RadioReport.HeadMRT.Domain.Models;
using System;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace RadioReport.HeadMRT.Repo.Repositories
{
    public class VesselsPageRepository : PageWithImageRepositoryBase<VesselsPage, VesselsFinding>, IVesselsPageRepository
    {
        public VesselsPageRepository(HeadMRTDbContext dbContext, IMinIOWrapper minIOWrapper, ILogger<VesselsPageRepository> logger)
            : base(dbContext, minIOWrapper, nameof(HeadMRT), logger)
        {
        }

        protected override Expression<Func<Guid, VesselsFinding, bool>> HasImageFile => (Guid imageFileId, VesselsFinding f) => f.ImageFileId == imageFileId;

        public override async Task Delete(Guid id)
        {
            var imageFilePropertyPath = nameof(VesselsPage.Findings) + "." + nameof(VesselsFinding.UploadedImageFile);
            var toRemove = await GetByIdAsync(id, new[]
            {
                nameof(VesselsPage.Findings),
                imageFilePropertyPath
            });

            if (toRemove != null)
            {
                var toRemoveFromFindings = toRemove.Findings?.ToList().FindAll(p => p.ImageFileId.HasValue) ?? Enumerable.Empty<VesselsFinding>();

                foreach (var findingWithImage in toRemoveFromFindings)
                {
                    await RemoveImageFile(findingWithImage.ImageFileId.Value);
                }

                DataContext.Set<VesselsPage>().Remove(toRemove);
            }
            else
            {
                throw new NotFoundException("Page with given id does not exist in database");
            }
        }

        public override async Task<VesselsPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<VesselsPage, bool>> predicate = null) =>
            await GetByIdAsync(id, includes, false);

        public override async Task<VesselsPage> GetByIdAsync(Guid id, string[] includes, bool getStream)
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

        protected override void UpdateCollections(VesselsPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));

            foreach (var finding in model.Findings?.Where(f => f.IsDeleted && f.ImageFileId != null) ?? Enumerable.Empty<VesselsFinding>())
            {
                RemoveImageFile(finding.ImageFileId.Value).Wait();
            }
            UpdateCollection(model.Findings);
        }
    }
}
