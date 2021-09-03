using Microsoft.Extensions.Logging;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.MammaMRT.Domain.Interfaces;
using RadioReport.MammaMRT.Domain.Models;
using System;
using System.Linq.Expressions;
using System.Linq;
using System.Threading.Tasks;
using RadioReport.Common.Logic.MinIO;

namespace RadioReport.MammaMRT.Repo.Repositories
{
    public class DiagnosisPageRepository : PageWithImageRepositoryBase<DiagnosisPage, DiagnosisFinding>, IDiagnosisPageRepository
    {
        public DiagnosisPageRepository(MammaMRTDbContext dbContext, IMinIOWrapper minIOWrapper, ILogger<DiagnosisPageRepository> logger)
            : base(dbContext, minIOWrapper, nameof(MammaMRT), logger)
        {
        }

        protected override Expression<Func<Guid, DiagnosisFinding, bool>> HasImageFile => (Guid imageFileId, DiagnosisFinding f) => f.ImageFileId == imageFileId;

        public override async Task Delete(Guid id)
        {
            var imageFilePropertyPath = nameof(DiagnosisPage.Findings) + "." + nameof(DiagnosisFinding.UploadedImageFile);
            var toRemove = await GetByIdAsync(id, new[]
            {
                nameof(DiagnosisPage.Findings),
                imageFilePropertyPath
            });

            if (toRemove != null)
            {
                var toRemoveFromFindings = toRemove.Findings?.ToList().FindAll(p => p.ImageFileId.HasValue) ?? Enumerable.Empty<DiagnosisFinding>();

                foreach (var findingWithImage in toRemoveFromFindings)
                {
                    await RemoveImageFile(findingWithImage.ImageFileId.Value);
                }

                DataContext.Set<DiagnosisPage>().Remove(toRemove);
            }
            else
            {
                throw new NotFoundException("Page with given id does not exist in database");
            }
        }

        public override async Task<DiagnosisPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<DiagnosisPage, bool>> predicate = null) =>
            await GetByIdAsync(id, includes, false);

        public override async Task<DiagnosisPage> GetByIdAsync(Guid id, string[] includes, bool getStream)
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

        protected override void UpdateCollections(DiagnosisPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));
            
            foreach (var finding in model.Findings?.Where(f => f.IsDeleted && f.ImageFileId != null) ?? Enumerable.Empty<DiagnosisFinding>())
            {
                RemoveImageFile(finding.ImageFileId.Value).Wait();
            }
            UpdateCollection(model.Findings);
        }
    }
}
