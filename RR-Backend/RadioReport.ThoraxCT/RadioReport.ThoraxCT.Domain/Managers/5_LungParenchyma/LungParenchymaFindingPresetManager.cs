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
    public class LungParenchymaFindingPresetManager : Manager<LungParenchymaFindingPreset, ILungParenchymaFindingPresetRepository>, ILungParenchymaFindingPresetManager
    {
        private readonly IPageManager<TechnologyPage> _technologyPageManager;

        public LungParenchymaFindingPresetManager(ILungParenchymaFindingPresetRepository repository, IPageManager<TechnologyPage> technologyPageManager) : base(repository)
        {
            _technologyPageManager = technologyPageManager;
        }

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis() => await Repository.GetAllAvailableDiagnosis();

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis(LungParenchymaFindingType findingType) =>
            await Repository.GetAllAvailableDiagnosis(findingType);

        public async Task<LungParenchymaFindingPreset> GetByDiagnosisValue(LungParenchymaFindingPresetRequest diagnosisParams, Guid reportId)
        {
            var technologyPage = await _technologyPageManager.GetByReportId(reportId);
            var preset = await Repository.GetByDiagnosisValue(diagnosisParams);

            if (technologyPage?.CMReinforcedType != CMReinforcedType.Yes && preset != null)
            {
                preset.ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.None;
                preset.ContrastEnhancementHomogeneityType = HomogeneityType.None;
            }

            return preset;
        }
    }
}
