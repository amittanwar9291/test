using RadioReport.Common.Logic.Managers;
using RadioReport.Common.Module.Logic.Enums.Technology;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.HeadMRT.Domain.Enums;
using RadioReport.HeadMRT.Domain.Enums.Meninges;
using RadioReport.HeadMRT.Domain.Interfaces;
using RadioReport.HeadMRT.Domain.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RadioReport.HeadMRT.Domain.Managers
{
    public class MeningesFindingPresetManager : Manager<MeningesFindingPreset, IMeningesFindingPresetRepository>, IMeningesFindingPresetManager
    {
        private readonly IPageManager<TechnologyPage> _technologyPageManager;

        public MeningesFindingPresetManager(IMeningesFindingPresetRepository repository, IPageManager<TechnologyPage> technologyPageManager) : base(repository)
        {
            _technologyPageManager = technologyPageManager;
        }

        public async Task<MeningesFindingPreset> GetByDiagnosisValue(MeningesMassDiagnosisType diagnosis, Guid reportId)
        {
            var preset = await Repository.GetByDiagnosisValue(diagnosis);
            var technologyPage = await _technologyPageManager.GetByReportId(reportId);

            if (technologyPage?.CMReinforcedType != CMReinforcedType.Yes && preset != null)
            {
                preset.ContrastEnhancementQuantitativeType = ContrastQuantitativeType.None;
                preset.ContrastEnhancementHomogeneityType = HomogeneityType.None;
                preset.ContrastEnhancementDistributionType = ContrastDistributionType.None;
            }

            return preset;
        }

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis(MeningesFindingType findingType) =>
            await Repository.GetAllAvailableDiagnosis(findingType);

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis() => await Repository.GetAllAvailableDiagnosis();
    }
}
