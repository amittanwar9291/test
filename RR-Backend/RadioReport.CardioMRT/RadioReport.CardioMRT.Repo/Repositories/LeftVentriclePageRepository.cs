using System;
using System.Linq.Expressions;
using System.Threading.Tasks;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.CardioMRT.Domain.Interfaces;
using RadioReport.CardioMRT.Domain.Models;
using RadioReport.Common.Exceptions;
using Microsoft.Extensions.Logging;
using RadioReport.Common.Logic.MinIO;

namespace RadioReport.CardioMRT.Repo.Repositories
{
    public class LeftVentriclePageRepository : PageWithImageRepositoryBase<LeftVentriclePage, LeftVentriclePage>, ILeftVentriclePageRepository
    {
        public LeftVentriclePageRepository(CardioMRTDbContext dbContext, IMinIOWrapper minIOWrapper, ILogger<LeftVentriclePageRepository> logger) : base(dbContext,
            minIOWrapper, nameof(CardioMRT), logger)
        {
        }

        protected override Expression<Func<Guid, LeftVentriclePage, bool>> HasImageFile => (Guid g, LeftVentriclePage page) => 
            page.LGEImageFileId == g || page.T1ImageFileId == g || page.T2ImageFileId == g || page.T1GdImageFileId == g;

        public override async Task Delete(Guid id)
        {
            var toRemove = await GetByIdAsync(id, new[]
            {
                nameof(LeftVentriclePage.KineticDisorderLocalizer),
                nameof(LeftVentriclePage.PerfusionDefectLocalizer), 
                nameof(LeftVentriclePage.LGESegmentalLocalizer),
                nameof(LeftVentriclePage.T1Localizer), 
                nameof(LeftVentriclePage.T2Localizer),
                nameof(LeftVentriclePage.T1GdLocalizer),
                nameof(LeftVentriclePage.LGEImageFile),
                nameof(LeftVentriclePage.T1ImageFile),
                nameof(LeftVentriclePage.T2ImageFile),
                nameof(LeftVentriclePage.T1GdImageFile)
            });

            if (toRemove != null)
            {
                foreach(var imageId in toRemove.ImageIds)
                {
                    RemoveImageFile(imageId);
                }

                DataContext.Set<LeftVentriclePage>().Remove(toRemove);
            }
            else
            {
                throw new NotFoundException("Page with given id does not exist in database");
            }
        }

        public override Task<LeftVentriclePage> GetByIdAsync(Guid id, string[] includes, Expression<Func<LeftVentriclePage, bool>> predicate = null) =>
            GetByIdAsync(id, includes, false);

        public override async Task<LeftVentriclePage> GetByIdAsync(Guid id, string[] includes, bool getStream)
        {
            var pageModel = await base.GetByIdAsync(id, includes);

            if (pageModel == null)
            {
                return null;
            }

            if (getStream)
            {
                pageModel.LGEImageFile = pageModel.LGEImageFileId.HasValue ? await GetImageFile(pageModel.LGEImageFileId.Value) : null;
                pageModel.T1ImageFile = pageModel.T1ImageFileId.HasValue ? await GetImageFile(pageModel.T1ImageFileId.Value) : null;
                pageModel.T2ImageFile = pageModel.T2ImageFileId.HasValue ? await GetImageFile(pageModel.T2ImageFileId.Value) : null;
                pageModel.T1GdImageFile = pageModel.T1GdImageFileId.HasValue ? await GetImageFile(pageModel.T1GdImageFileId.Value) : null;
            }

            return pageModel;
        }

        public override LeftVentriclePage Update(LeftVentriclePage model)
        {
            DataContext.Attach(model);
            var result = DataContext.Set<LeftVentriclePage>().Update(model);
            SetUpdateForModelProperty(model, m => m.KineticDisorderLocalizer);
            SetUpdateForModelProperty(model, m => m.PerfusionDefectLocalizer);
            SetUpdateForModelProperty(model, m => m.LGESegmentalLocalizer);
            SetUpdateForModelProperty(model, m => m.T1Localizer);
            SetUpdateForModelProperty(model, m => m.T2Localizer);
            SetUpdateForModelProperty(model, m => m.T1GdLocalizer);

            return result.Entity;
        }
    }
}
