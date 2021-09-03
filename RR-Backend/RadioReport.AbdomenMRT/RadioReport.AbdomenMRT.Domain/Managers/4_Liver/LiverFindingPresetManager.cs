using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.AbdomenMRT.Domain.Enums.Liver;
using RadioReport.AbdomenMRT.Domain.Interfaces;
using RadioReport.AbdomenMRT.Domain.Models;
using RadioReport.Common.Logic.Managers;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.Common.Module.Logic.Enums.Technology;
using RadioReport.Common.Module.Logic.Interfaces;

namespace RadioReport.AbdomenMRT.Domain.Managers
{
    public class LiverFindingPresetManager : Manager<LiverFindingPreset, ILiverFindingPresetRepository>, ILiverFindingPresetManager
    {
        private readonly IPageManager<TechnologyPage> _technologyPageManager;

        public LiverFindingPresetManager(ILiverFindingPresetRepository repository, IPageManager<TechnologyPage> technologyPageManager) : base(repository)
        {
            _technologyPageManager = technologyPageManager;
        }

        public async Task<LiverFindingPreset> GetByDiagnosisValue(LiverDifferentialDiagnosisType diagnosis, Guid reportId)
        {
            var technologyPage = await _technologyPageManager.GetByReportId(reportId);
            var preset = await Repository.GetByDiagnosisValue(diagnosis);

            if (technologyPage?.CMReinforcedType != CMReinforcedType.Yes && preset != null)
            {
                preset.IsWashInArterialPhase = false;
                preset.IsMaskingVenousPhase = false;
                preset.IsLateVenousPooling = false;
                preset.IsCentralScar = false;
            }

            if (technologyPage?.ContrastMediumType != ContrastMediumType.GadotericAcid && 
                technologyPage?.ContrastMediumType != ContrastMediumType.GadobenicAcid && 
                preset != null)
            {
                preset.LiverSpecificContrastEnhancement = SignalTypeExtended.None;
                preset.QualityOfEnhancement = LiverHomogeneityType.None;
                preset.WashInArterialPhaseType = WashInArterialPhaseType.None;
            }


            return preset;
        }

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis(LiverFindingType findingType) =>
            await Repository.GetAllAvailableDiagnosis(findingType);

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis() => await Repository.GetAllAvailableDiagnosis();
    }
}
