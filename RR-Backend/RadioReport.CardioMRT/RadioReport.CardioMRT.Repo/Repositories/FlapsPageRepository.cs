using System;
using System.Linq.Expressions;
using RadioReport.Common.Module.Repository.Repositories;
using RadioReport.CardioMRT.Domain.Interfaces;
using RadioReport.CardioMRT.Domain.Models;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.Linq;
using RadioReport.Common.Exceptions;
using Microsoft.Extensions.Logging;
using RadioReport.Common.Logic.MinIO;

namespace RadioReport.CardioMRT.Repo.Repositories
{
    public class FlapsPageRepository : PageWithImageRepositoryBase<FlapsPage, Measures>, IFlapsPageRepository
    {
        public FlapsPageRepository(CardioMRTDbContext dbContext, IMinIOWrapper minIOWrapper, ILogger<FlapsPageRepository> logger) : base(dbContext, minIOWrapper,
            nameof(CardioMRT), logger)
        {
        }

        protected override Expression<Func<Guid, Measures, bool>> HasImageFile => (Guid imageFileId, Measures m) =>
            m.PCMeasurementImageId == imageFileId || m.FlowCurveImageId == imageFileId;

        public override async Task Delete(Guid id)
        {
            var toRemove = await GetByIdAsync(id, GetIncludes());

            if (toRemove != null)
            {
                var imageIds = toRemove.Measures?.Where(p => p.HasImages)?.SelectMany(p => p.ImageIds) ?? Enumerable.Empty<Guid>();

                foreach (var imageId in imageIds)
                {
                    await RemoveImageFile(imageId);
                }

                DataContext.Set<FlapsPage>().Remove(toRemove);
            }
            else
            {
                throw new NotFoundException("Page with given id does not exist in database");
            }
        }

        public override async Task<FlapsPage> GetByIdAsync(Guid id, string[] includes, Expression<Func<FlapsPage, bool>> predicate = null) =>
            await GetByIdAsync(id, includes, false);

        public override async Task<FlapsPage> GetByIdAsync(Guid id, string[] includes, bool getStream)
        {
            var pageModel = await base.GetByIdAsync(id, includes);

            if (pageModel == null)
            {
                return null;
            }

            if (getStream)
            {
                var isAnyUploadedFile = pageModel.Measures?.Any(f => f.HasImages) ?? false;
                if (isAnyUploadedFile)
                {
                    var filesIds = new List<Guid?>();
                    var measuresWithFile = pageModel.Measures.FindAll(p => p.HasImages);
                    foreach (var measures in measuresWithFile)
                    {
                        measures.FlowCurveImage = await GetImageFile(measures.FlowCurveImageId.GetValueOrDefault());
                        measures.PCMeasurementImage = await GetImageFile(measures.PCMeasurementImageId.GetValueOrDefault());
                    }
                }
            }

            return pageModel;
        }

        public override FlapsPage Update(FlapsPage model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));
            
            DataContext.Attach(model);

            var result = DataContext.Set<FlapsPage>().Update(model);

            SetUpdateForModelProperty(model, p => p.AortaAscendensMeasures);
            SetUpdateForModelProperty(model, p => p.PulmonaryArteryMeasures);
            SetUpdateForModelProperty(model, p => p.MitralValveMeasures);

            UpdateCollection(model.HeartValves);
            UpdateCollection(model.CongenitalHeartDiseases);

            var idOfImagesToRemove = new List<Guid>();

            if (!model.IsAortaAscendens)
            {
                idOfImagesToRemove.AddRange(model.AortaAscendensMeasures.ImageIds);
            }
            if (!model.IsPulmonaryArtery)
            {
                idOfImagesToRemove.AddRange(model.PulmonaryArteryMeasures.ImageIds);
            }
            if (!model.IsMitralValve)
            {
                idOfImagesToRemove.AddRange(model.MitralValveMeasures.ImageIds);
            }

            idOfImagesToRemove.ForEach(m => RemoveImageFile(m).Wait());

            return result.Entity;
        }

        private string[] GetIncludes() =>
            new[]
            {
                nameof(FlapsPage.AortaAscendensMeasures),
                nameof(FlapsPage.PulmonaryArteryMeasures),
                nameof(FlapsPage.MitralValveMeasures),
                nameof(FlapsPage.HeartValves),
                nameof(FlapsPage.CongenitalHeartDiseases),
                nameof(FlapsPage.AortaAscendensMeasures) + "." + nameof(FlapsPage.AortaAscendensMeasures.FlowCurveImage),
                nameof(FlapsPage.AortaAscendensMeasures) + "." + nameof(FlapsPage.AortaAscendensMeasures.PCMeasurementImage),
                nameof(FlapsPage.PulmonaryArteryMeasures) + "." + nameof(FlapsPage.PulmonaryArteryMeasures.FlowCurveImage),
                nameof(FlapsPage.PulmonaryArteryMeasures) + "." + nameof(FlapsPage.PulmonaryArteryMeasures.PCMeasurementImage),
                nameof(FlapsPage.MitralValveMeasures) + "." + nameof(FlapsPage.MitralValveMeasures.FlowCurveImage),
                nameof(FlapsPage.MitralValveMeasures) + "." + nameof(FlapsPage.MitralValveMeasures.PCMeasurementImage)
            };
    }
}
