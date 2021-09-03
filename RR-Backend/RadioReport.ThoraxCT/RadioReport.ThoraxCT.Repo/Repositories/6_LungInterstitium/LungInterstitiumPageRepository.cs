using System;
using System.Linq.Expressions;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Logic.MinIO;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.ThoraxCT.Domain.Interfaces;
using RadioReport.ThoraxCT.Domain.Models;

namespace RadioReport.ThoraxCT.Repo.Repositories
{
    public class LungInterstitiumPageRepository : PageWithImageRepositoryBase<LungInterstitiumPage, LungInterstitiumFinding>,
        ILungInterstitiumPageRepository
    {
        public LungInterstitiumPageRepository(ThoraxCTDbContext dbContext, IMinIOWrapper minIOWrapper, ILogger<LungInterstitiumPageRepository> logger)
            : base(dbContext, minIOWrapper, nameof(ThoraxCT), logger)
        {
        }

        protected override Expression<Func<Guid, LungInterstitiumFinding, bool>> HasImageFile => (imageFileId, f) => f.ImageFileId == imageFileId;

        public override async Task Delete(Guid id)
        {
            var imageFilePropertyPath = nameof(LungInterstitiumPage.Findings) + "." + nameof(LungInterstitiumFinding.UploadedImageFile);
            var toRemove = await GetByIdAsync(id, new[]
            {
                nameof(LungInterstitiumPage.Findings),
                imageFilePropertyPath
            });

            if (toRemove != null)
            {
                var toRemoveFromFindings = toRemove.Findings?.ToList().FindAll(p => p.ImageFileId.HasValue) ?? Enumerable.Empty<LungInterstitiumFinding>();

                foreach (var findingWithImage in toRemoveFromFindings)
                {
                    await RemoveImageFile(findingWithImage.ImageFileId.Value);
                }

                DataContext.Set<LungInterstitiumPage>().Remove(toRemove);
            }
            else
            {
                throw new NotFoundException("Page with given id does not exist in database");
            }
        }

        public override async Task<LungInterstitiumPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<LungInterstitiumPage, bool>> predicate = null) =>
            await GetByIdAsync(id, includes, false);

        public override async Task<LungInterstitiumPage> GetByIdAsync(Guid id, string[] includes, bool getStream)
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

        protected override void UpdateCollections(LungInterstitiumPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));
            
            foreach (var finding in model.Findings?.Where(f => f.IsDeleted && f.ImageFileId != null) ?? Enumerable.Empty<LungInterstitiumFinding>())
            {
                RemoveImageFile(finding.ImageFileId.Value).Wait();
            }
            UpdateCollection(model.Findings);
        }
    }
}
