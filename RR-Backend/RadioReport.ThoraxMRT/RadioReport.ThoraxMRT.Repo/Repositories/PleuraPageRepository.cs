using Microsoft.Extensions.Logging;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Logic.MinIO;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.ThoraxMRT.Domain.Interfaces;
using RadioReport.ThoraxMRT.Domain.Models;
using System;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace RadioReport.ThoraxMRT.Repo.Repositories
{
    public class PleuraPageRepository : PageWithImageRepositoryBase<PleuraPage, PleuraFinding>, IPleuraPageRepository
    {
        public PleuraPageRepository(ThoraxMRTDbContext dbContext, IMinIOWrapper minIOWrapper, ILogger<PleuraPageRepository> logger) : base(dbContext, minIOWrapper, nameof(ThoraxMRT), logger)
        {
        }

        protected override Expression<Func<Guid, PleuraFinding, bool>> HasImageFile => (guid, finding) => finding.ImageFileId == guid;

        public override async Task Delete(Guid id)
        {
            var imageFilePropertyPath = nameof(PleuraPage.Findings) + "." + nameof(PleuraFinding.UploadedImageFile);
            var toRemove = await GetByIdAsync(id, new[]
            {
                nameof(PleuraPage.Findings),
                imageFilePropertyPath
            });

            if (toRemove != null)
            {
                var toRemoveFromFindings = toRemove.Findings?.ToList().FindAll(p => p.ImageFileId.HasValue) ?? Enumerable.Empty<PleuraFinding>();

                foreach (var findingWithImage in toRemoveFromFindings)
                {
                    await RemoveImageFile(findingWithImage.ImageFileId.Value);
                }

                DataContext.Set<PleuraPage>().Remove(toRemove);
            }
            else
            {
                throw new NotFoundException("Page with given id does not exist in database");
            }
        }

        public override async Task<PleuraPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<PleuraPage, bool>> predicate = null) =>
            await GetByIdAsync(id, includes, false);

        public override async Task<PleuraPage> GetByIdAsync(Guid id, string[] includes, bool getStream)
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

        protected override void UpdateCollections(PleuraPage model)
        {
            foreach (var finding in model?.Findings?.Where(f => f.IsDeleted && f.ImageFileId != null) ?? Enumerable.Empty<PleuraFinding>())
            {
                RemoveImageFile(finding.ImageFileId.Value).Wait();
            }
            UpdateCollection(model.Findings);
        }
    }
}
