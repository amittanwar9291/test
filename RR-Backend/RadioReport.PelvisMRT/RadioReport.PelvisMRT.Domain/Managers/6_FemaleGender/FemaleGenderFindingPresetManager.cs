using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Managers;
using RadioReport.Common.Module.Logic.Enums.Technology;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.PelvisMRT.Domain.Enums.FemaleGender;
using RadioReport.PelvisMRT.Domain.Interfaces;
using RadioReport.PelvisMRT.Domain.Models;

namespace RadioReport.PelvisMRT.Domain.Managers
{
    public class FemaleGenderFindingPresetManager : Manager<FemaleGenderFindingPreset, IFemaleGenderFindingPresetRepository>, IFemaleGenderFindingPresetManager
    {
        private readonly IPageManager<TechnologyPage> _technologyPageManager;
        
        public FemaleGenderFindingPresetManager(IFemaleGenderFindingPresetRepository repository, IPageManager<TechnologyPage> technologyPageManager) : base(repository)
        {
            _technologyPageManager = technologyPageManager;
        }

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis() => await Repository.GetAllAvailableDiagnosis();

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis(FemaleGenderFindingType findingType) =>
            await Repository.GetAllAvailableDiagnosis(findingType);

        public async Task<FemaleGenderFindingPreset> GetByDiagnosisValue(FemaleGenderFindingPresetRequest diagnosisParams, Guid reportId)
        {
            var technologyPage = await _technologyPageManager.GetByReportIdAsync(reportId, new[] { nameof(TechnologyPage.Sequences) });
            var preset = await Repository.GetByDiagnosisValue(diagnosisParams);

            if (technologyPage?.CMReinforcedType != CMReinforcedType.Yes && preset != null)
            {
                preset.ContrastEnhancementType1 = ContrastEnhancementType.None;
                preset.ContrastEnhancementHomogenityType1 = HomogenityType.None;
                preset.HeterogeneousType = HeterogeneousType.None;
            }

            if (!technologyPage?.Sequences?.Any(s => s.WeightingType == WeightingType.DWI) ?? true && preset != null)
            {
                preset.IsDiffusionRestriction = false;
            }

            return preset;
        }
    }
}
