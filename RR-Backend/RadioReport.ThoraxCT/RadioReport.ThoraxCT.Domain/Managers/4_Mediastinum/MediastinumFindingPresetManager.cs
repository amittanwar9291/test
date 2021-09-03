using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Managers;
using RadioReport.Common.Module.Logic.Enums.Technology;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.ThoraxCT.Domain.Enums;
using RadioReport.ThoraxCT.Domain.Interfaces;
using RadioReport.ThoraxCT.Domain.Models;

namespace RadioReport.ThoraxCT.Domain.Managers
{
    public class MediastinumFindingPresetManager : Manager<MediastinumFindingPreset, IMediastinumFindingPresetRepository>, IMediastinumFindingPresetManager
    {
        private readonly IPageManager<TechnologyPage> _technologyPageManager;

        public MediastinumFindingPresetManager(IMediastinumFindingPresetRepository repository, IPageManager<TechnologyPage> technologyPageManager) : base(repository)
        {
            _technologyPageManager = technologyPageManager;
        }

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis() => await Repository.GetAllAvailableDiagnosis();

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis(MediastinumFindingType findingType) =>
            await Repository.GetAllAvailableDiagnosis(findingType);

        public async Task<MediastinumFindingPreset> GetByDiagnosisValue(MediastinumDiagnosisType diagnosis, Guid reportId)
        {
            var technologyPage = await _technologyPageManager.GetByReportId(reportId);
            var preset = await Repository.GetByDiagnosisValue(diagnosis);

            if (technologyPage?.CMReinforcedType != CMReinforcedType.Yes && preset != null)
            {
                preset.ContrastEnhancementType = ContrastEnhancementType.None;
                preset.NoCMEnhancementHomogeneityType = HomogeneityType.None;
            }

            return preset;
        }
    }
}
