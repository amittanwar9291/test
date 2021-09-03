using Microsoft.Extensions.Logging;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.KneeMRT.Domain.Interfaces;
using RadioReport.KneeMRT.Domain.Models;
using System;
using System.Linq.Expressions;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RadioReport.Common.Logic.MinIO;

namespace RadioReport.KneeMRT.Repo.Repositories
{
    public class RibbonsPageRepository :
        PageWithImageRepositoryBase<RibbonsPage, RibbonsFinding>, IRibbonsPageRepository
    {
        public RibbonsPageRepository(KneeMRTDbContext dbContext, IMinIOWrapper minIOWrapper, ILogger<RibbonsPageRepository> logger)
            : base(dbContext, minIOWrapper, nameof(KneeMRT), logger)
        {
        }

        protected override Expression<Func<Guid, RibbonsFinding, bool>> HasImageFile => (Guid imageFileId, RibbonsFinding f) => f.ImageFileId == imageFileId;

        public override async Task Delete(Guid id)
        {
            var imageFilePropertyPath = nameof(RibbonsPage.Findings) + "." + nameof(RibbonsFinding.UploadedImageFile);
            var toRemove = await GetByIdAsync(id, new[]
            {
                nameof(RibbonsPage.Findings),
                imageFilePropertyPath
            });

            if (toRemove != null)
            {
                var toRemoveFromFindings = toRemove.Findings?.ToList().FindAll(p => p.ImageFileId.HasValue) ?? Enumerable.Empty<RibbonsFinding>();

                foreach (var findingWithImage in toRemoveFromFindings)
                {
                    await RemoveImageFile(findingWithImage.ImageFileId.Value);
                }

                DataContext.Set<RibbonsPage>().Remove(toRemove);
            }
            else
            {
                throw new NotFoundException("Page with given id does not exist in database");
            }
        }

        public override async Task<RibbonsPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<RibbonsPage, bool>> predicate = null) =>
            await GetByIdAsync(id, includes, false);

        public override async Task<RibbonsPage> GetByIdAsync(Guid id, string[] includes, bool getStream)
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

        protected override void UpdateCollections(RibbonsPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));
            
            foreach (var finding in model.Findings?.Where(f => f.IsDeleted && f.ImageFileId != null) ?? Enumerable.Empty<RibbonsFinding>())
            {
                RemoveImageFile(finding.ImageFileId.Value).Wait();
            }
            UpdateCollection(model.Findings);
        }
    }
}
