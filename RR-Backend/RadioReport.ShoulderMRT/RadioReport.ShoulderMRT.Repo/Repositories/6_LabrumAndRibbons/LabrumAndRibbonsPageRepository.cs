using System;
using System.Linq.Expressions;
using RadioReport.ShoulderMRT.Domain.Interfaces;
using RadioReport.ShoulderMRT.Domain.Models;
using System.Threading.Tasks;
using RadioReport.Common.Module.Repository.Repositories;
using System.Linq;
using System.Collections.Generic;
using RadioReport.Common.Exceptions;
using Microsoft.Extensions.Logging;
using RadioReport.Common.Logic.MinIO;

namespace RadioReport.ShoulderMRT.Repo.Repositories
{
    public class LabrumAndRibbonsPageRepository : PageWithImageRepositoryBase<LabrumAndRibbonsPage, LabrumAndRibbonsFinding>, ILabrumAndRibbonsPageRepository
    {
        public LabrumAndRibbonsPageRepository(ShoulderMRTDbContext dbContext, IMinIOWrapper minIOWrapper, ILogger<LabrumAndRibbonsPageRepository> logger)
            : base(dbContext, minIOWrapper, nameof(ShoulderMRT), logger)
        {
        }

        protected override Expression<Func<Guid, LabrumAndRibbonsFinding, bool>> HasImageFile =>
            (Guid imageFileId, LabrumAndRibbonsFinding f) => f.ImageFileId == imageFileId;

        public override async Task Delete(Guid id)
        {
            var imageFilePropertyPath = nameof(LabrumAndRibbonsPage.Findings) + "." + nameof(LabrumAndRibbonsFinding.UploadedImageFile);
            var toRemove = await GetByIdAsync(id, new[]
            {
                nameof(LabrumAndRibbonsPage.Findings),
                imageFilePropertyPath
            });

            if (toRemove != null)
            {
                var toRemoveFromFindings = toRemove.Findings?.ToList().FindAll(p => p.ImageFileId.HasValue) ?? Enumerable.Empty<LabrumAndRibbonsFinding>();

                foreach (var findingWithImage in toRemoveFromFindings)
                {
                    await RemoveImageFile(findingWithImage.ImageFileId.Value);
                }

                DataContext.Set<LabrumAndRibbonsPage>().Remove(toRemove);
            }
            else
            {
                throw new NotFoundException("Page with given id does not exist in database");
            }
        }

        public override async Task<LabrumAndRibbonsPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<LabrumAndRibbonsPage, bool>> predicate = null) =>
            await GetByIdAsync(id, includes, false);

        public override async Task<LabrumAndRibbonsPage> GetByIdAsync(Guid id, string[] includes, bool getStream)
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

        protected override void UpdateCollections(LabrumAndRibbonsPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));

            foreach (var finding in model.Findings?.Where(f => f.IsDeleted && f.ImageFileId != null) ?? Enumerable.Empty<LabrumAndRibbonsFinding>())
            {
                RemoveImageFile(finding.ImageFileId.Value).Wait();
            }
            UpdateCollection(model.Findings);
        }
    }
}
