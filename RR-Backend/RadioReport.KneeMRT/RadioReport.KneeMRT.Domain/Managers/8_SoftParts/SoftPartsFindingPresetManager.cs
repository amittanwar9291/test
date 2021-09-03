using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Managers;
using RadioReport.Common.Module.Logic.Enums.Technology;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.KneeMRT.Domain.Enums;
using RadioReport.KneeMRT.Domain.Interfaces;
using RadioReport.KneeMRT.Domain.Models;
using RadioReport.KneeMRT.SoftParts.Domain.Enums;

namespace RadioReport.KneeMRT.Domain.Managers
{
    public class SoftPartsFindingPresetManager : Manager<SoftPartsFindingPreset, ISoftPartsFindingPresetRepository>, ISoftPartsFindingPresetManager
    {
        private readonly IPageManager<TechnologyPage> _technologyPageManager;

        public SoftPartsFindingPresetManager(ISoftPartsFindingPresetRepository repository, IPageManager<TechnologyPage> technologyPageManager) : base(repository)
        {
            _technologyPageManager = technologyPageManager;
        }

        public async Task<SoftPartsFindingPreset> GetByDiagnosisValue(SoftPartsDiagnosisType diagnosis, Guid reportId)
        {
            var technologyPage = await _technologyPageManager.GetByReportId(reportId);

            var preset = await Repository.GetByDiagnosisValue(diagnosis);

            if (technologyPage?.CMReinforcedType != CMReinforcedType.Yes && preset != null)
            {
                preset.SynoviaCMEnhancementType = SynoviaCMEnhancementType.None;
                preset.TissueTumorCMEnhancementType = CMEnchancementType.None;
                preset.QuantitativeType = HomogeneityType.None;
            }

            return preset;
        }

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis(SoftPartsFindingType findingType) =>
            await Repository.GetAllAvailableDiagnosis(findingType);

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis() => await Repository.GetAllAvailableDiagnosis();
    }
}