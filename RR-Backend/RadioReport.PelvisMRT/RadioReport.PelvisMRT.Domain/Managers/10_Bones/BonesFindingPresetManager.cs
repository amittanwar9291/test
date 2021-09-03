using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Managers;
using RadioReport.Common.Module.Logic.Enums.Technology;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.PelvisMRT.Domain.Enums.Bones;
using RadioReport.PelvisMRT.Domain.Interfaces;
using RadioReport.PelvisMRT.Domain.Models;
namespace RadioReport.PelvisMRT.Domain.Managers
{
    public class BonesFindingPresetManager : Manager<BonesFindingPreset, IBonesFindingPresetRepository>, IBonesFindingPresetManager
    {
        private readonly IPageManager<TechnologyPage> _technologyPageManager;

        public BonesFindingPresetManager(IBonesFindingPresetRepository repository, IPageManager<TechnologyPage> technologyPageManager) : base(repository)
        {
            _technologyPageManager = technologyPageManager;
        }
        public async Task<BonesFindingPreset> GetByDiagnosisValue(BonesDiagnosisType diagnosis, Guid reportId)
        {
            var technologyPage = await _technologyPageManager.GetByReportId(reportId);
            var preset = await Repository.GetByDiagnosisValue(diagnosis);

            if (technologyPage?.CMReinforcedType != CMReinforcedType.Yes && preset != null)
            {
                preset.ContrastEnhancementDistributionType = ContrastEnhancementDistributionType.None;
                preset.ContrastEnhancementType = ContrastEnhancementType.None;
                preset.ContrastHomogeneityType = HomogeneityType.None;
            }
            return preset;
        }
        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis(BonesFindingType findingType) =>
            await Repository.GetAllAvailableDiagnosis(findingType);
        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis() => await Repository.GetAllAvailableDiagnosis();
    }
}
