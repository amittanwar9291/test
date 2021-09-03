using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.CardioMRT.Domain.Enums.SpatialRequirement;
using RadioReport.CardioMRT.Domain.Interfaces;
using RadioReport.CardioMRT.Domain.Models;
using RadioReport.Common.Logic.Managers;
using RadioReport.Common.Module.Logic.Enums.Technology;
using RadioReport.Common.Module.Logic.Interfaces;

namespace RadioReport.CardioMRT.Domain.Managers
{
    public class SpatialRequirementFindingPresetManager: Manager<SpatialRequirementFindingPreset, ISpatialRequirementFindingPresetRepository>, ISpatialRequirementFindingPresetManager
    {
        private readonly IPageManager<TechnologyPage> _technologyPageManager;
        
        public SpatialRequirementFindingPresetManager(ISpatialRequirementFindingPresetRepository repository, IPageManager<TechnologyPage> technologyPageManager) : base(repository)
        {
            _technologyPageManager = technologyPageManager;
        }

        public async Task<SpatialRequirementFindingPreset> GetByDiagnosisValue(SpatialRequirementDiagnosisType diagnosis, Guid reportId)
        {
            var technologyPage = await _technologyPageManager.GetByReportId(reportId);
            var preset = await Repository.GetByDiagnosisValue(diagnosis);

            if (technologyPage == null || technologyPage?.CMReinforcedType == CMReinforcedType.None || technologyPage?.CMReinforcedType == CMReinforcedType.No)
            {
                preset.ContrastEnhancementPerfusionType = EnhancementType.None;
                preset.GdEnhancementEGEType = EnhancementType.None;
                preset.GdEnhancementQualityEGEType = HomogeneityType.None;
                preset.ContrastEnhancementQualityPerfusionType = HomogeneityType.None;
                preset.ContrastEnhancementIntensityPerfusionType = EnhancementIntensityType.None;
            }
            return preset;
        }

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis() => await Repository.GetAllAvailableDiagnosis();
    }
}
