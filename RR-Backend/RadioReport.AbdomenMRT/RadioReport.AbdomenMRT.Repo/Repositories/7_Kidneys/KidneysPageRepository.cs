using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.AbdomenMRT.Domain.Interfaces;
using RadioReport.AbdomenMRT.Domain.Models;
using System.Threading.Tasks;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using Microsoft.Extensions.Logging;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Logic.MinIO;

namespace RadioReport.AbdomenMRT.Repo.Repositories
{
    public class KidneysPageRepository : PageWithImageRepositoryBase<KidneysPage, KidneysFinding>, IKidneysPageRepository
    {
        public KidneysPageRepository(AbdomenMRTDbContext dbContext, IMinIOWrapper minIOWrapper, ILogger<KidneysPageRepository> logger) 
        : base(dbContext, minIOWrapper, nameof(AbdomenMRT), logger)
        {
        }

        protected override Expression<Func<Guid, KidneysFinding, bool>> HasImageFile =>
            (Guid imageFileId, KidneysFinding finding) => 
                finding.NormVariantOrAnomalyImageFileId == imageFileId || finding.ObstructiveNephropathyChar1ImageFileId == imageFileId || finding.ObstructiveNephropathyChar2ImageFileId == imageFileId || finding.MassImageFileId == imageFileId ||
                finding.DecreasedRenalVolumeImageFileId == imageFileId || finding.IncreasedRenalVolumeImageFileId == imageFileId || finding.VascularNephropathyImageFileId == imageFileId;

        public override async Task<KidneysPage> GetByIdAsync(Guid id, string[] includes, bool getStream)
        {
            var pageModel = await base.GetByIdAsync(id, includes);

            if (pageModel == null)
            {
                return null;
            }

            if (getStream)
            {
                var isAnyUploadedFile = pageModel.Findings?.Any(f => f.HasImages) ?? false;
                if (isAnyUploadedFile)
                {
                    var filesIds         = new List<Guid?>();
                    var findingsWithFile = pageModel.Findings.ToList().FindAll(p => p.HasImages);
                    foreach (var finding in findingsWithFile)
                    {
                        finding.NormVariantOrAnomalyImageFile   = await GetImageFile(finding.NormVariantOrAnomalyImageFileId.GetValueOrDefault());
                        finding.ObstructiveNephropathyChar1ImageFile = await GetImageFile(finding.ObstructiveNephropathyChar1ImageFileId.GetValueOrDefault());
                        finding.ObstructiveNephropathyChar2ImageFile = await GetImageFile(finding.ObstructiveNephropathyChar2ImageFileId.GetValueOrDefault());
                        finding.MassImageFile                   = await GetImageFile(finding.MassImageFileId.GetValueOrDefault());
                        finding.DecreasedRenalVolumeImageFile   = await GetImageFile(finding.DecreasedRenalVolumeImageFileId.GetValueOrDefault());
                        finding.IncreasedRenalVolumeImageFile   = await GetImageFile(finding.IncreasedRenalVolumeImageFileId.GetValueOrDefault());
                        finding.VascularNephropathyImageFile    = await GetImageFile(finding.VascularNephropathyImageFileId.GetValueOrDefault());

                    }
                }
            }

            return pageModel;
        }

        protected override void UpdateCollections(KidneysPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));
            
            foreach (var finding in model.Findings?.Where(f => f.IsDeleted && f.HasImages) ?? Enumerable.Empty<KidneysFinding>())
            {
                foreach(var id in finding.ImageIds)
                {
                    RemoveImageFile(id).Wait();
                }
            }
            UpdateCollection(model.Findings);
        }

        public override async Task Delete(Guid id)
        {
            var normVariantOrAnomalyImageFilePropertyPath   = nameof(KidneysPage.Findings) + "." + nameof(KidneysFinding.NormVariantOrAnomalyImageFile);
            var obstructiveNephropathyChar1ImageFilePropertyPath = nameof(KidneysPage.Findings) + "." + nameof(KidneysFinding.ObstructiveNephropathyChar1ImageFile);
            var obstructiveNephropathyChar2ImageFilePropertyPath = nameof(KidneysPage.Findings) + "." + nameof(KidneysFinding.ObstructiveNephropathyChar2ImageFile);
            var massImageFileImageFilePropertyPath = nameof(KidneysPage.Findings) + "." + nameof(KidneysFinding.MassImageFile);
            var decreasedRenalVolumeImageFileImageFilePropertyPath= nameof(KidneysPage.Findings) + "." + nameof(KidneysFinding.DecreasedRenalVolumeImageFile);
            var increasedRenalVolumeImageFileImageFilePropertyPath= nameof(KidneysPage.Findings) + "." + nameof(KidneysFinding.IncreasedRenalVolumeImageFile);
            var vascularNephropathyImageFileImageFilePropertyPath= nameof(KidneysPage.Findings) + "." + nameof(KidneysFinding.VascularNephropathyImageFile);
            
            var toRemove = await GetByIdAsync(id, new[]
            {
                nameof(KidneysPage.Findings),
                normVariantOrAnomalyImageFilePropertyPath,
                obstructiveNephropathyChar1ImageFilePropertyPath,
                obstructiveNephropathyChar2ImageFilePropertyPath,
                massImageFileImageFilePropertyPath,
                decreasedRenalVolumeImageFileImageFilePropertyPath,
                increasedRenalVolumeImageFileImageFilePropertyPath,
                vascularNephropathyImageFileImageFilePropertyPath
            });
            
            if (toRemove != null)
            {
                var toRemoveFromFindings = toRemove.Findings?.ToList().FindAll(p => p.HasImages) ?? Enumerable.Empty<KidneysFinding>();

                foreach (var findingWithImage in toRemoveFromFindings)
                {
                    var imageIds = findingWithImage.ImageIds;
                    foreach (var imageId in imageIds)
                    {
                        await RemoveImageFile(imageId);
                    }
                }

                DataContext.Set<KidneysPage>().Remove(toRemove);
            }
            else
            {
                throw new NotFoundException("Page with given id does not exist in database");
            }
        }
    }
}
