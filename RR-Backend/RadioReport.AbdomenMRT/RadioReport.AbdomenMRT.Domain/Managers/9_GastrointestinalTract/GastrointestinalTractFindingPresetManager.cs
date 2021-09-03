using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.AbdomenMRT.Domain.Enums;
using RadioReport.AbdomenMRT.Domain.Enums.GastrointestinalTract;
using RadioReport.AbdomenMRT.Domain.Interfaces;
using RadioReport.AbdomenMRT.Domain.Models;
using RadioReport.Common.Logic.Managers;
using RadioReport.Common.Module.Logic.Enums.Technology;
using RadioReport.Common.Module.Logic.Interfaces;

namespace RadioReport.AbdomenMRT.Domain.Managers
{
    public class GastrointestinalTractFindingPresetManager : Manager<GastrointestinalTractFindingPreset, IGastrointestinalTractFindingPresetRepository>, IGastrointestinalTractFindingPresetManager
    {
        private readonly IPageManager<TechnologyPage> _technologyPageManager;

        public GastrointestinalTractFindingPresetManager(IGastrointestinalTractFindingPresetRepository repository, IPageManager<TechnologyPage> technologyPageManager) : base(repository)
        {
            _technologyPageManager = technologyPageManager;
        }

        public async Task<GastrointestinalTractFindingPreset> GetByDiagnosisValue(GastrointestinalDifferentialDiagnosisType diagnosis, Guid reportId)
        {
            var technologyPage = await _technologyPageManager.GetByReportId(reportId);
            var preset = await Repository.GetByDiagnosisValue(diagnosis);

            if (technologyPage?.CMReinforcedType != CMReinforcedType.Yes && preset != null)
            {
                preset.ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.None;
            }

            return preset;
        }

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis(GastrointestinalTractFindingType findingType) =>
            await Repository.GetAllAvailableDiagnosis(findingType);

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis() => await Repository.GetAllAvailableDiagnosis();
    }
}
