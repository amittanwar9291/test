using RadioReport.Common.Logic.Managers;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.Common.Module.Logic.Enums.Technology;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.HeadMRT.Domain.Enums;
using RadioReport.HeadMRT.Domain.Enums.BrainstemCranialNerves;
using RadioReport.HeadMRT.Domain.Interfaces;
using RadioReport.HeadMRT.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RadioReport.HeadMRT.Domain.Managers
{
    public class BrainstemCranialNervesFindingPresetManager : Manager<BrainstemCranialNervesFindingPreset, IBrainstemCranialNervesFindingPresetRepository>, IBrainstemCranialNervesFindingPresetManager
    {
        private readonly IPageManager<TechnologyPage> _technologyPageManager;

        public BrainstemCranialNervesFindingPresetManager(IBrainstemCranialNervesFindingPresetRepository repository, IPageManager<TechnologyPage> technologyPageManager) : base(repository)
        {
            _technologyPageManager = technologyPageManager;
        }

        public async Task<BrainstemCranialNervesFindingPreset> GetByDiagnosisValue(BrainstemCranialNervesFindingPresetRequest diagnosisParams, Guid reportId)
        {
            var preset = await Repository.GetByDiagnosisValue(diagnosisParams);
            var technologyPage = await _technologyPageManager.GetByReportIdAsync(reportId, new[] { nameof(TechnologyPage.Sequences) });

            if (!(technologyPage?.Sequences?.Any(s => s.WeightingType == WeightingType.DWI) ?? false) && preset != null)
            {
                preset.DwiSignalType = SignalType.None;
            }

            if (technologyPage?.CMReinforcedType != CMReinforcedType.Yes && preset != null)
            {
                preset.ContrastEnhancementQuantitativeType = ContrastQuantitativeType.None;
                preset.ContrastEnhancementHomogeneityType = HomogeneityType.None;
                preset.ContrastEnhancementDistributionType = ContrastDistributionType.None;
            }

            return preset;
        }

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis(BrainstemCranialNervesFindingPresetRequest diagnosisParams) =>
            await Repository.GetAllAvailableDiagnosis(diagnosisParams);

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis() => await Repository.GetAllAvailableDiagnosis();
    }
}
