using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Managers;
using RadioReport.ThoraxCT.Domain.Enums;
using RadioReport.ThoraxCT.Domain.Interfaces;
using RadioReport.ThoraxCT.Domain.Models;

namespace RadioReport.ThoraxCT.Domain.Managers
{
    public class BonesFindingPresetManager : Manager<BonesFindingPreset, IBonesFindingPresetRepository>, IBonesFindingPresetManager
    {
        public BonesFindingPresetManager(IBonesFindingPresetRepository repository) : base(repository)
        {
        }

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis() => await Repository.GetAllAvailableDiagnosis();

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis(BonesFindingType findingType) =>
            await Repository.GetAllAvailableDiagnosis(findingType);

        public async Task<BonesFindingPreset> GetByDiagnosisValue(BonesFindingPresetRequest diagnosisParams, Guid reportId) =>
            await Repository.GetByDiagnosisValue(diagnosisParams);
    }
}