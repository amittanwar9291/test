using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Managers;
using RadioReport.Common.Module.Logic.Enums.Technology;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.SpineMRT.Domain.Enums.SpinalCanal;
using RadioReport.SpineMRT.Domain.Interfaces;
using RadioReport.SpineMRT.Domain.Models;

namespace RadioReport.SpineMRT.Domain.Managers
{
    public class SpinalCanalFindingPresetManager : Manager<SpinalCanalFindingPreset, ISpinalCanalFindingPresetRepository>, ISpinalCanalFindingPresetManager
    {
        private readonly IPageManager<TechnologyPage> _technologyPageManager;

        public SpinalCanalFindingPresetManager(ISpinalCanalFindingPresetRepository repository, IPageManager<TechnologyPage> technologyPageManager) : base(repository)
        {
            _technologyPageManager = technologyPageManager;
        }

        public async Task<SpinalCanalFindingPreset> GetByDiagnosisValue(SpinalCanalFindingPresetRequest diagnosis, Guid reportId)
        {
            var technologyPage = await _technologyPageManager.GetByReportId(reportId);
            var preset = await Repository.GetByDiagnosisValue(diagnosis);

            if (technologyPage?.CMReinforcedType != CMReinforcedType.Yes && preset != null)
            {
                preset.ContrastEnhancementHomogeneityType = HomogeneityType.None;
                preset.ContrastEnhancementType = ContrastEnhancementType.None;
                preset.IsIntramedullaryFocal = false;
                preset.IsAnteriorRadix = false;
                preset.IsPial = false;
                preset.PialType = PialType.None;
                preset.IsSubarachnoid = false;
                preset.IsEpidural = false;
            }

            return preset;
        }

        public async Task<IEnumerable<string>>
            GetAllAvailableDiagnosis(SpinalCanalFindingPresetRequest diagnosisParams) =>
            await Repository.GetAllAvailableDiagnosis(diagnosisParams);

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis() => await Repository.GetAllAvailableDiagnosis();
    }
}
