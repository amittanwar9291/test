using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Managers;
using RadioReport.Common.Module.Logic.Enums.Technology;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.ElbowMRT.Domain.Enums;
using RadioReport.ElbowMRT.Domain.Interfaces;
using RadioReport.ElbowMRT.Domain.Models;

namespace RadioReport.ElbowMRT.Domain.Managers
{
    public class SoftTissueFindingPresetManager : Manager<SoftTissueFindingPreset, ISoftTissueFindingPresetRepository>, ISoftTissueFindingPresetManager
    {
        private readonly IPageManager<TechnologyPage> _technologyPageManager;

        public SoftTissueFindingPresetManager(ISoftTissueFindingPresetRepository repository, IPageManager<TechnologyPage> technologyPageManager) : base(repository)
        {
            _technologyPageManager = technologyPageManager;
        }

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis() => await Repository.GetAllAvailableDiagnosis();

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis(SoftTissueFindingType findingType) =>
            await Repository.GetAllAvailableDiagnosis(findingType);

        public async Task<SoftTissueFindingPreset> GetByDiagnosisValue(SoftTissueDifferentialDiagnosisType diagnosis, Guid reportId)
        {
            var technologyPage = await _technologyPageManager.GetByReportId(reportId);
            var preset = await Repository.GetByDiagnosisValue(diagnosis);

            if (technologyPage?.CMReinforcedType != CMReinforcedType.Yes && preset != null)
            {
                preset.ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.None;
                preset.CAEnhancementHomogeneityType = HomogeneityType.None;
                preset.HeterogenousType = HeterogenousType.None;
            }

            return preset;
        }
    }
}
