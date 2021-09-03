using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.AbdomenMRT.Domain.Enums;
using RadioReport.AbdomenMRT.Domain.Enums.Pancreas;
using RadioReport.AbdomenMRT.Domain.Interfaces;
using RadioReport.AbdomenMRT.Domain.Models;
using RadioReport.Common.Logic.Managers;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.Common.Module.Logic.Enums.Technology;
using RadioReport.Common.Module.Logic.Interfaces;

namespace RadioReport.AbdomenMRT.Domain.Managers
{
    public class PancreasFindingPresetManager : Manager<PancreasFindingPreset, IPancreasFindingPresetRepository>, IPancreasFindingPresetManager
    {
        private readonly IPageManager<TechnologyPage> _technologyPageManager;

        public PancreasFindingPresetManager(IPancreasFindingPresetRepository repository, IPageManager<TechnologyPage> technologyPageManager) : base(repository)
        {
            _technologyPageManager = technologyPageManager;
        }

        public async Task<PancreasFindingPreset> GetByDiagnosisValue(MassDifferentialDiagnosisType diagnosis, Guid reportId)
        {
            var technologyPage = await _technologyPageManager.GetByReportId(reportId);
            var preset = await Repository.GetByDiagnosisValue(diagnosis);

            if (technologyPage?.CMReinforcedType != CMReinforcedType.Yes && preset != null)
            {
                preset.ContrastEnhancementQuantitative = ContrastEnhancementQuantitative.None;
                preset.ContrastEnhancementHomogeneityType = HomogeneityType.None;
                preset.ContrastEnhancementDistribution = ContrastEnhancementDistribution.None;
            }

            return preset;
        }

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis(PancreasFindingType findingType) =>
            await Repository.GetAllAvailableDiagnosis(findingType);

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis() => await Repository.GetAllAvailableDiagnosis();
    }
}