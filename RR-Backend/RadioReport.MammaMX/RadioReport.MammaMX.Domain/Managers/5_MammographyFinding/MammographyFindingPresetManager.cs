using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Managers;
using RadioReport.MammaMX.Domain.Enums.MammographyFinding;
using RadioReport.MammaMX.Domain.Interfaces;
using RadioReport.MammaMX.Domain.Models;

namespace RadioReport.MammaMX.Domain.Managers
{
    public class MammographyFindingPresetManager : Manager<MammographyFindingPreset, IMammographyFindingPresetRepository>, IMammographyFindingPresetManager
    {
        public MammographyFindingPresetManager(IMammographyFindingPresetRepository repository) : base(repository)
        {
        }

        public async Task<MammographyFindingPreset> GetByDiagnosisValue(DiagnosisType diagnosis, Guid reportId) => 
            await Repository.GetByDiagnosisValue(diagnosis);


        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis(MammographyFindingType findingType) =>
            await Repository.GetAllAvailableDiagnosis(findingType);

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis() => await Repository.GetAllAvailableDiagnosis();
    }
}