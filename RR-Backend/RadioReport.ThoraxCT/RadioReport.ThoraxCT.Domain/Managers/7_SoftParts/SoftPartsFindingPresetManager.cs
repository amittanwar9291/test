using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Managers;
using RadioReport.Common.Module.Logic.Enums.Technology;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.ThoraxCT.Domain.Enums;
using RadioReport.ThoraxCT.Domain.Interfaces;
using RadioReport.ThoraxCT.Domain.Models;

namespace RadioReport.ThoraxCT.Domain.Managers
{
    public class SoftPartsFindingPresetManager : Manager<SoftPartsFindingPreset, ISoftPartsFindingPresetRepository>, ISoftPartsFindingPresetManager
    {
        private readonly IPageManager<TechnologyPage> _technologyPageManager;

        public SoftPartsFindingPresetManager(ISoftPartsFindingPresetRepository repository, IPageManager<TechnologyPage> technologyPageManager) : base(repository)
        {
            _technologyPageManager = technologyPageManager;
        }

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis() => await Repository.GetAllAvailableDiagnosis();

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis(SoftPartsFindingType findingType) =>
            await Repository.GetAllAvailableDiagnosis(findingType);

        public async Task<SoftPartsFindingPreset> GetByDiagnosisValue(SoftPartsFindingPresetRequest diagnosisParams, Guid reportId)
        {
            var technologyPage = await _technologyPageManager.GetByReportId(reportId);
            var preset = await Repository.GetByDiagnosisValue(diagnosisParams);

            if (technologyPage?.CMReinforcedType != CMReinforcedType.Yes && preset != null)
            {
                preset.ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.None;
                preset.CMEnhancementHomogeneityType = HomogeneityType.None;
                preset.HeterogeneousType = HeterogeneousType.None;
            }

            return preset;
        }
    }
}
