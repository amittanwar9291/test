using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Managers;
using RadioReport.MammaMX.Domain.Enums.UltrasoundFinding;
using RadioReport.MammaMX.Domain.Interfaces;
using RadioReport.MammaMX.Domain.Models;

namespace RadioReport.MammaMX.Domain.Managers
{
    public class UltrasoundFindingPresetManager : Manager<UltrasoundFindingPreset, IUltrasoundFindingPresetRepository>, IUltrasoundFindingPresetManager
    {
        public UltrasoundFindingPresetManager(IUltrasoundFindingPresetRepository repository) : base(repository)
        {
        }

        public async Task<UltrasoundFindingPreset> GetByDiagnosisValue(MassDiagnosisType diagnosis, Guid reportId) => 
            await Repository.GetByDiagnosisValue(diagnosis);


        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis(UltrasoundFindingType findingType) =>
            await Repository.GetAllAvailableDiagnosis(findingType);

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis() => await Repository.GetAllAvailableDiagnosis();
    }
}