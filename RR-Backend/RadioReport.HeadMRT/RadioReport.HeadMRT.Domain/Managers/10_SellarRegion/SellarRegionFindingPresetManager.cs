using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Managers;
using RadioReport.Common.Module.Logic.Enums.Technology;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.HeadMRT.Domain.Enums;
using RadioReport.HeadMRT.Domain.Enums.SellarRegion;
using RadioReport.HeadMRT.Domain.Interfaces;
using RadioReport.HeadMRT.Domain.Models;

namespace RadioReport.HeadMRT.Domain.Managers
{
    public class SellarRegionFindingPresetManager : Manager<SellarRegionFindingPreset, ISellarRegionFindingPresetRepository>, ISellarRegionFindingPresetManager
    {
        private readonly IPageManager<TechnologyPage> _technologyPageManager;

        public SellarRegionFindingPresetManager(ISellarRegionFindingPresetRepository repository, IPageManager<TechnologyPage> technologyPageManager) : base(repository)
        {
            _technologyPageManager = technologyPageManager;
        }

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis() => await Repository.GetAllAvailableDiagnosis();

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis(SellarRegionFindingType findingType) =>
            await Repository.GetAllAvailableDiagnosis(findingType);

        public async Task<SellarRegionFindingPreset> GetByDiagnosisValue(SellarRegionDiagnosisType diagnosis, Guid reportId)
        {
            var technologyPage = await _technologyPageManager.GetByReportId(reportId);
            var preset = await Repository.GetByDiagnosisValue(diagnosis);

            if (technologyPage?.CMReinforcedType != CMReinforcedType.Yes && preset != null)
            {
                preset.ContrastQuantitativeType = ContrastQuantitativeType.None;
                preset.ContrastEnhancementHomogeneityType = HomogeneityType.None;
                preset.ContrastDistributionType = ContrastDistributionType.None;
            }

            return preset;
        }
    }
}
