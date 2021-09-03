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
    public class ThyroidPageRepository : PageWithImageRepositoryBase<ThyroidPage, ThyroidFinding>, IThyroidPageRepository
    {
        
        public ThyroidPageRepository(NeckMRTDbContext dbContext, IMinIOWrapper minIOWrapper, ILogger<ThyroidPageRepository> logger)
            : base(dbContext, minIOWrapper, nameof(NeckMRT), logger)
        {
        }

        protected override Expression<Func<Guid, ThyroidFinding, bool>> HasImageFile => (Guid imageFileId, ThyroidFinding f) =>
            f.ImageFileId == imageFileId;

        public override async Task Delete(Guid id)
        {
            var imageFilePropertyPath = nameof(ThyroidPage.Findings) + "." +
                                        nameof(ThyroidFinding.UploadedImageFile);
            var toRemove = await GetByIdAsync(id, new[]
            {
                nameof(ThyroidPage.Findings),
                imageFilePropertyPath
            });

            if (toRemove != null)
            {
                var toRemoveFromFindings = toRemove.Findings?.ToList().FindAll(p => p.ImageFileId.HasValue) ??
                                           Enumerable.Empty<ThyroidFinding>();

                foreach (var findingWithImage in toRemoveFromFindings)
                {
                    await RemoveImageFile(findingWithImage.ImageFileId.Value);
                }

                DataContext.Set<ThyroidPage>().Remove(toRemove);
            }
            else
            {
                throw new NotFoundException("Page with given id does not exist in database");
            }
        }

        public override async Task<ThyroidPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<ThyroidPage, bool>> predicate = null) =>
            await GetByIdAsync(id, includes, false);

        public override async Task<ThyroidPage> GetByIdAsync(Guid id, string[] includes, bool getStream)
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

        protected override void UpdateCollections(ThyroidPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));
            
            foreach (var finding in model.Findings?.Where(f => f.IsDeleted && f.ImageFileId != null) ?? Enumerable.Empty<ThyroidFinding>())
            {
                RemoveImageFile(finding.ImageFileId.Value).Wait();
            }
            UpdateCollection(model.Findings);
        }
    }
}
