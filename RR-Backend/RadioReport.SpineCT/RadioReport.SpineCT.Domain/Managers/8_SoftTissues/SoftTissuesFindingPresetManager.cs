using RadioReport.Common.Logic.Managers;
using RadioReport.Common.Module.Logic.Enums.Technology;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.SpineCT.Domain.Enums.SoftTissues;
using RadioReport.SpineCT.Domain.Interfaces;
using RadioReport.SpineCT.Domain.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RadioReport.SpineCT.Domain.Managers
{
    public class SoftTissuesFindingPresetManager : Manager<SoftTissuesFindingPreset, ISoftTissuesFindingPresetRepository>, ISoftTissuesFindingPresetManager
    {
        private readonly IPageManager<TechnologyPage> _technologyPageManager;

        public SoftTissuesFindingPresetManager(ISoftTissuesFindingPresetRepository repository, IPageManager<TechnologyPage> technologyPageManager) : base(repository)
        {
            _technologyPageManager = technologyPageManager;
        }

        public async Task<SoftTissuesFindingPreset> GetByDiagnosisValue(SoftTissuesDiagnosisType diagnosis, Guid reportId)
        {
            var preset = await Repository.GetByDiagnosisValue(diagnosis);
            var technologyPage = await _technologyPageManager.GetByReportIdAsync(reportId, new[] { nameof(TechnologyPage.Acquisitions) });

            if (technologyPage?.CMReinforcedType != CMReinforcedType.Yes && preset != null)
            {
                preset.ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.None;
                preset.ContrastEnhancementDistributionType = ContrastEnhancementDistributionType.None;
            }

            return preset;
        }

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis(SoftTissuesFindingType findingType) =>
            await Repository.GetAllAvailableDiagnosis(findingType);

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis() => await Repository.GetAllAvailableDiagnosis();
    }
}
