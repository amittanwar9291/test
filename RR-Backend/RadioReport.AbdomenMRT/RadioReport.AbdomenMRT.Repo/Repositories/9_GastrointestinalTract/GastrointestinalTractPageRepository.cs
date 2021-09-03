using System;
using System.Linq.Expressions;
using System.Threading.Tasks;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.AbdomenMRT.Domain.Interfaces;
using RadioReport.AbdomenMRT.Domain.Models;
using System.Collections.Generic;
using RadioReport.Common.Logic.MinIO;
using Microsoft.Extensions.Logging;
using System.Linq;
using RadioReport.Common.Exceptions;

namespace RadioReport.AbdomenMRT.Repo.Repositories
{
    public class GastrointestinalTractPageRepository : PageWithImageRepositoryBase<GastrointestinalTractPage, GastrointestinalTractFinding>, IGastrointestinalTractPageRepository
    {
        public GastrointestinalTractPageRepository(AbdomenMRTDbContext dbContext, IMinIOWrapper minIOWrapper, ILogger<GastrointestinalTractPageRepository> logger)
            : base(dbContext, minIOWrapper, nameof(AbdomenMRT), logger)
        {
        }

        protected override Expression<Func<Guid, GastrointestinalTractFinding, bool>> HasImageFile => (Guid imageFileId, GastrointestinalTractFinding f) => f.ImageFileId == imageFileId;

        public override async Task Delete(Guid id)
        {
            var imageFilePropertyPath = nameof(GastrointestinalTractPage.Findings) + "." + nameof(GastrointestinalTractFinding.UploadedImageFile);
            var toRemove = await GetByIdAsync(id, new[]
            {
                nameof(GastrointestinalTractPage.Findings),
                imageFilePropertyPath
            });

            if (toRemove != null)
            {
                var toRemoveFromFindings = toRemove.Findings?.ToList().FindAll(p => p.ImageFileId.HasValue) ?? Enumerable.Empty<GastrointestinalTractFinding>();

                foreach (var findingWithImage in toRemoveFromFindings)
                {
                    await RemoveImageFile(findingWithImage.ImageFileId.Value);
                }

                DataContext.Set<GastrointestinalTractPage>().Remove(toRemove);
            }
            else
            {
                throw new NotFoundException("Page with given id does not exist in database");
            }
        }

        public override async Task<GastrointestinalTractPage> GetByIdAsync(Guid id, string[] includes, bool getStream)
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

        protected override void UpdateCollections(GastrointestinalTractPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));

            foreach (var finding in model.Findings?.Where(f => f.IsDeleted && f.ImageFileId != null) ?? Enumerable.Empty<GastrointestinalTractFinding>())
            {
                RemoveImageFile(finding.ImageFileId.Value).Wait();
            }
            UpdateCollection(model.Findings);
        }
    }
}
