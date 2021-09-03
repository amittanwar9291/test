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
    public class MeningesPageRepository : PageWithImageRepositoryBase<MeningesPage, MeningesFinding>, IMeningesPageRepository
    {
        public MeningesPageRepository(HeadCTDbContext dbContext, IMinIOWrapper minIOWrapper, ILogger<MeningesPageRepository> logger) 
            : base(dbContext, minIOWrapper, nameof(HeadCT), logger)
        {
        }

        protected override Expression<Func<Guid, MeningesFinding, bool>> HasImageFile => (Guid imageFileId, MeningesFinding f) => f.ImageFileId == imageFileId;

        public override async Task Delete(Guid id)
        {
            var toRemove = await GetByIdAsync(id, new[]
            {
                nameof(MeningesPage.Findings),
                nameof(MeningesPage.Findings) + "." + nameof(MeningesFinding.ImageFile),
            });

            if (toRemove != null)
            {
                var toRemoveFromFindings = toRemove.Findings?.ToList().FindAll(p => p.ImageFileId.HasValue) ?? Enumerable.Empty<MeningesFinding>();

                foreach (var findingWithImage in toRemoveFromFindings)
                {
                    await RemoveImageFile(findingWithImage.ImageFileId.Value);
                }

                DataContext.Set<MeningesPage>().Remove(toRemove);
            }
            else
            {
                throw new NotFoundException("Page with given id does not exist in database");
            }
        }

        public override async Task<MeningesPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<MeningesPage, bool>> predicate = null) =>
            await GetByIdAsync(id, includes, false);

        public override async Task<MeningesPage> GetByIdAsync(Guid id, string[] includes, bool getStream)
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

        protected override void UpdateCollections(MeningesPage model)
    {
            if (model == null) throw new ArgumentNullException(nameof(model));

            foreach (var finding in model.Findings?.Where(f => f.IsDeleted && f.ImageFileId != null) ?? Enumerable.Empty<MeningesFinding>())
        {
                RemoveImageFile(finding.ImageFileId.Value).Wait();
            }
            UpdateCollection(model.Findings);
        }
    }
}
