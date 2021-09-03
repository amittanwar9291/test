using RadioReport.Common.Logic.Managers;
using RadioReport.Common.Module.Logic.Enums.Technology;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.HeadMRT.Domain.Enums;
using RadioReport.HeadMRT.Domain.Enums.CerebrospinalFluidSpace;
using RadioReport.HeadMRT.Domain.Interfaces;
using RadioReport.HeadMRT.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RadioReport.HeadMRT.Domain.Managers
{
    public class CerebrospinalFluidSpaceFindingPresetManager : Manager<CerebrospinalFluidSpaceFindingPreset, ICerebrospinalFluidSpaceFindingPresetRepository>, ICerebrospinalFluidSpaceFindingPresetManager
    {
        private readonly IPageManager<TechnologyPage> _technologyPageManager;

        public CerebrospinalFluidSpaceFindingPresetManager(ICerebrospinalFluidSpaceFindingPresetRepository repository, IPageManager<TechnologyPage> technologyPageManager) : base(repository)
        {
            _technologyPageManager = technologyPageManager;
        }

        public async Task<CerebrospinalFluidSpaceFindingPreset> GetByDiagnosisValue(CerebrospinalMassDiagnosisType diagnosis, Guid reportId)
        {
            var preset = await Repository.GetByDiagnosisValue(diagnosis);
            var technologyPage = await _technologyPageManager.GetByReportIdAsync(reportId, new[] { nameof(TechnologyPage.Sequences) });

            if (!(technologyPage?.Sequences?.Any(s => s.WeightingType == WeightingType.DWI) ?? false) && preset != null)
            {
                preset.IsDiffusionRestriction = false;
            }

            if (technologyPage?.CMReinforcedType != CMReinforcedType.Yes && preset != null)
            {
                preset.ContrastEnhancementQuantitativeType = ContrastQuantitativeType.None;
                preset.ContrastEnhancementHomogeneityType = HomogeneityType.None;
                preset.ContrastEnhancementDistributionType = ContrastDistributionType.None;
            }

            return preset;
        }

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis(CerebrospinalFluidSpaceFindingType findingType) =>
            await Repository.GetAllAvailableDiagnosis(findingType);

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis() => await Repository.GetAllAvailableDiagnosis();
    }
}
