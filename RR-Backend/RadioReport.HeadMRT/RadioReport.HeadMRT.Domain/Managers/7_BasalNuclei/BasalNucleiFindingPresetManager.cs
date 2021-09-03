using RadioReport.Common.Logic.Managers;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.Common.Module.Logic.Enums.Technology;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.HeadMRT.Domain.Enums;
using RadioReport.HeadMRT.Domain.Enums.BasalNuclei;
using RadioReport.HeadMRT.Domain.Interfaces;
using RadioReport.HeadMRT.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RadioReport.HeadMRT.Domain.Managers
{
    public class BasalNucleiFindingPresetManager : Manager<BasalNucleiFindingPreset, IBasalNucleiFindingPresetRepository>, IBasalNucleiFindingPresetManager
    {
        private readonly IPageManager<TechnologyPage> _technologyPageManager;

        public BasalNucleiFindingPresetManager(IBasalNucleiFindingPresetRepository repository, IPageManager<TechnologyPage> technologyPageManager) : base(repository)
        {
            _technologyPageManager = technologyPageManager;
        }

        public async Task<BasalNucleiFindingPreset> GetByDiagnosisValue(BasalNucleiDiagnosisType diagnosis, Guid reportId)
        {
            var preset = await Repository.GetByDiagnosisValue(diagnosis);
            var technologyPage = await _technologyPageManager.GetByReportIdAsync(reportId, new[] { nameof(TechnologyPage.Sequences) });

            if (!(technologyPage?.Sequences?.Any(s => s.WeightingType == WeightingType.DWI) ?? false) && preset != null)
            {
                preset.DwiSignalType = SignalType.None;
                preset.AdcSignalType = SignalType.None;
                preset.IsDiffusionRestriction = false;
            }

            if (technologyPage?.CMReinforcedType != CMReinforcedType.Yes && preset != null)
            {
                preset.ContrastEnhancementType = ContrastEnhancementType.None;
                preset.ContrastEnhancementHomogeneityType = HomogeneityType.None;
            }

            return preset;
        }

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis(BasalNucleiFindingType findingType) =>
            await Repository.GetAllAvailableDiagnosis(findingType);

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis() => await Repository.GetAllAvailableDiagnosis();
    }
}
