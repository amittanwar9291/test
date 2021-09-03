using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.AbdomenMRT.Domain.Enums.Kidneys;
using RadioReport.AbdomenMRT.Domain.Interfaces;
using RadioReport.AbdomenMRT.Domain.Models;
using RadioReport.Common.Logic.Managers;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.Common.Module.Logic.Enums.Technology;
using RadioReport.Common.Module.Logic.Interfaces;

namespace RadioReport.AbdomenMRT.Domain.Managers
{
    public class KidneysFindingPresetManager : Manager<KidneysFindingPreset, IKidneysFindingPresetRepository>, IKidneysFindingPresetManager
    {
        private readonly IPageManager<TechnologyPage> _technologyPageManager;

        public KidneysFindingPresetManager(IKidneysFindingPresetRepository repository, IPageManager<TechnologyPage> technologyPageManager) : base(repository)
        {
            _technologyPageManager = technologyPageManager;
        }

        public async Task<KidneysFindingPreset> GetByDiagnosisValue(KidneysDifferentialDiagnosisType diagnosis, Guid reportId)
        {
            var technologyPage = await _technologyPageManager.GetByReportId(reportId);
            var preset         = await Repository.GetByDiagnosisValue(diagnosis);

            if (technologyPage?.CMReinforcedType != CMReinforcedType.Yes && preset != null)
            {
                preset.CorticomedullaryPhase = SignalTypeExtended.None;
                preset.NephrographicPhase    = SignalTypeExtended.None;
            }

            return preset;
        }

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis(KidneysFindingType findingType) =>
            await Repository.GetAllAvailableDiagnosis(findingType);

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis() => await Repository.GetAllAvailableDiagnosis();
    }
}