using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.AbdomenMRT.Domain.Interfaces;
using RadioReport.AbdomenMRT.Domain.Models;
using System.Linq.Expressions;
using System;
using System.Threading.Tasks;
using System.Linq;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Logic.MinIO;
using Microsoft.Extensions.Logging;

namespace RadioReport.AbdomenMRT.Repo.Repositories
{
    public class PancreasPageRepository : PageWithImageRepositoryBase<PancreasPage, PancreasFinding>, IPancreasPageRepository
    {
        public PancreasPageRepository(AbdomenMRTDbContext dbContext, IMinIOWrapper minIOWrapper, ILogger<PancreasPageRepository> logger)
            : base(dbContext, minIOWrapper, nameof(AbdomenMRT), logger)
        {
        }

        protected override Expression<Func<Guid, PancreasFinding, bool>> HasImageFile => (Guid imageFileId, PancreasFinding f) => f.ImageFileId == imageFileId;

        public async override Task Delete(Guid id)
        {
            var imageFilePropertyPath = nameof(PancreasPage.Findings) + "." + nameof(PancreasFinding.UploadedImageFile);
            var toRemove = await GetByIdAsync(id, new[]
            {
                nameof(PancreasPage.Findings),
                imageFilePropertyPath
            });

            if (toRemove != null)
            {
                var toRemoveFromFindings = toRemove.Findings?.ToList().FindAll(p => p.ImageFileId.HasValue) ?? Enumerable.Empty<PancreasFinding>();

                foreach (var findingWithImage in toRemoveFromFindings)
                {
                    await RemoveImageFile(findingWithImage.ImageFileId.Value);
                }

                DataContext.Set<PancreasPage>().Remove(toRemove);
            }
            else
            {
                throw new NotFoundException("Page with given id does not exist in database");
            }
        }

        public override async Task<PancreasPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<PancreasPage, bool>> predicate = null) =>
            await GetByIdAsync(id, includes, false);

        public override async Task<PancreasPage> GetByIdAsync(Guid id, string[] includes, bool getStream)
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

        protected override void UpdateCollections(PancreasPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));

            foreach (var finding in model.Findings?.Where(f => f.IsDeleted && f.ImageFileId != null) ?? Enumerable.Empty<PancreasFinding>())
            {
                RemoveImageFile(finding.ImageFileId.Value).Wait();
            }
            UpdateCollection(model.Findings);
        }
    }
}
