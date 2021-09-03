using System;
using System.Collections.Generic;
using RadioReport.HipMRT.Domain.Interfaces;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Managers;
using RadioReport.HipMRT.Bones.Domain.Enums;
using RadioReport.HipMRT.Domain.Models.Bones;
using RadioReport.Common.Module.Logic.Enums.Technology;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.HipMRT.Domain.Models;

namespace RadioReport.HipMRT.Domain.Managers
{
    public class BonesFindingPresetManager : Manager<BonesFindingPreset, IBonesFindingPresetRepository>, IBonesFindingPresetManager
    {
        private readonly IPageManager<TechnologyPage> _technologyPageManager;

        public BonesFindingPresetManager(IBonesFindingPresetRepository repository, IPageManager<TechnologyPage> technologyPageManager) : base(repository)
        {
            _technologyPageManager = technologyPageManager;
        }

        public async Task<BonesFindingPreset> GetByDiagnosisValue(MassOsteolysisDifferentialDiagnosisType diagnosis, Guid reportId)
        {
            var technologyPage = await _technologyPageManager.GetByReportId(reportId);
            var preset = await Repository.GetByDiagnosisValue(diagnosis);

            if (technologyPage?.CMReinforcedType != CMReinforcedType.Yes && preset != null)
            {
                preset.ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.None;
                preset.PronouncedHomogeneityType = HomogeneityType.None;
                preset.ContrastEnhancementDistributionType = ContrastEnhancementDistributionType.None;
            }
            return preset;
        }

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis() => await Repository.GetAllAvailableDiagnosis();
    }
}
