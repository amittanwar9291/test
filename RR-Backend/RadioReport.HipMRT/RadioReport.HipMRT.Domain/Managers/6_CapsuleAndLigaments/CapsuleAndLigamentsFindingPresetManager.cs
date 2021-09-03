using System;
using System.Collections.Generic;
using RadioReport.HipMRT.Domain.Interfaces;
using RadioReport.HipMRT.Domain.Enums;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Managers;
using RadioReport.Common.Module.Logic.Enums.Technology;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.HipMRT.Domain.Enums.CapsuleAndLigaments;
using RadioReport.HipMRT.Domain.Models;
using RadioReport.HipMRT.Domain.Models.CapsuleAndLigaments;

namespace RadioReport.HipMRT.Domain.Managers
{
    public class CapsuleAndLigamentsFindingPresetManager : Manager<CapsuleAndLigamentsFindingPreset, ICapsuleAndLigamentsFindingPresetRepository>, ICapsuleAndLigamentsFindingPresetManager
    {
        private readonly IPageManager<TechnologyPage> _technologyPageManager;
        
        public CapsuleAndLigamentsFindingPresetManager(ICapsuleAndLigamentsFindingPresetRepository repository, IPageManager<TechnologyPage> technologyPageManager) : base(repository)
        {
            _technologyPageManager = technologyPageManager;
        }

        public async Task<CapsuleAndLigamentsFindingPreset> GetByDiagnosisValue(SynoviaDifferentialDiagnosis diagnosis, Guid reportId)
        {
            var technologyPage = await _technologyPageManager.GetByReportId(reportId);
            var preset = await Repository.GetByDiagnosisValue(diagnosis);

            if (technologyPage?.CMReinforcedType == CMReinforcedType.None || technologyPage?.CMReinforcedType == CMReinforcedType.No)
            {
                preset.ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.None;
            }
            return preset;
        }

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis() => await Repository.GetAllAvailableDiagnosis();
    }
}
