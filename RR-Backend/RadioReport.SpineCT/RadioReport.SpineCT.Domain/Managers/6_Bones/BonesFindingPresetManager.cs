using RadioReport.Common.Logic.Managers;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.SpineCT.Domain.Enums.Bones;
using RadioReport.SpineCT.Domain.Interfaces;
using RadioReport.SpineCT.Domain.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RadioReport.SpineCT.Domain.Managers
{
    public class BonesFindingPresetManager : Manager<BonesFindingPreset, IBonesFindingPresetRepository>, IBonesFindingPresetManager
    {
        private readonly IPageManager<TechnologyPage> _technologyPageManager;

        public BonesFindingPresetManager(IBonesFindingPresetRepository repository, IPageManager<TechnologyPage> technologyPageManager) : base(repository)
        {
            _technologyPageManager = technologyPageManager;
        }

        public async Task<BonesFindingPreset> GetByDiagnosisValue(BonesDiagnosisType diagnosis, Guid reportId)
        {
            return await Repository.GetByDiagnosisValue(diagnosis);
        }

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis(BonesFindingType findingType) =>
            await Repository.GetAllAvailableDiagnosis(findingType);

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis() => await Repository.GetAllAvailableDiagnosis();
    }
}
