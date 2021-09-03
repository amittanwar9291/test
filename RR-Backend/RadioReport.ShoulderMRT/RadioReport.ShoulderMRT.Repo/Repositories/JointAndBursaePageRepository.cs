using Microsoft.Extensions.Logging;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.ShoulderMRT.Domain.Interfaces;
using RadioReport.ShoulderMRT.Domain.Models;
using System;
using System.Linq.Expressions;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RadioReport.Common.Logic.MinIO;

namespace RadioReport.ShoulderMRT.Repo.Repositories
{
    public class JointAndBursaePageRepository : PageWithImageRepositoryBase<JointAndBursaePage, JointAndBursaeFinding>, IJointAndBursaePageRepository
    {
        public JointAndBursaePageRepository(ShoulderMRTDbContext dbContext, IMinIOWrapper minIOWrapper, ILogger<JointAndBursaePageRepository> logger)
            : base(dbContext, minIOWrapper, nameof(ShoulderMRT), logger)
        {
        }

        protected override Expression<Func<Guid, JointAndBursaeFinding, bool>> HasImageFile => (Guid imageFileId, JointAndBursaeFinding f) =>
            f.ImageFileId == imageFileId;

        public override async Task Delete(Guid id)
        {
            var imageFilePropertyPath = nameof(JointAndBursaePage.Findings) + "." + nameof(JointAndBursaeFinding.UploadedImageFile);
            var toRemove = await GetByIdAsync(id, new[]
            {
                nameof(JointAndBursaePage.Findings),
                imageFilePropertyPath
            });

            if (toRemove != null)
            {
                var toRemoveFromFindings = toRemove.Findings?.ToList().FindAll(p => p.ImageFileId.HasValue) ?? Enumerable.Empty<JointAndBursaeFinding>();

                foreach (var findingWithImage in toRemoveFromFindings)
                {
                    await RemoveImageFile(findingWithImage.ImageFileId.Value);
                }

                DataContext.Set<JointAndBursaePage>().Remove(toRemove);
            }
            else
            {
                throw new NotFoundException("Page with given id does not exist in database");
            }
        }

        public override async Task<JointAndBursaePage> GetByIdAsync(Guid id, string[] includes, Expression<Func<JointAndBursaePage, bool>> predicate = null) =>
            await GetByIdAsync(id, includes, false);

        public override async Task<JointAndBursaePage> GetByIdAsync(Guid id, string[] includes, bool getStream)
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

        protected override void UpdateCollections(JointAndBursaePage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));

            foreach (var finding in model.Findings?.Where(f => f.IsDeleted && f.ImageFileId != null) ?? Enumerable.Empty<JointAndBursaeFinding>())
            {
                RemoveImageFile(finding.ImageFileId.Value).Wait();
            }
            UpdateCollection(model.Findings);
        }
    }
}
