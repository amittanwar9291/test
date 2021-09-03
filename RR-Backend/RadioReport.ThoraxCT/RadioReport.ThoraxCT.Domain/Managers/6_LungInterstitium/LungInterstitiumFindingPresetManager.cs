using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Managers;
using RadioReport.ThoraxCT.Domain.Enums;
using RadioReport.ThoraxCT.Domain.Interfaces;
using RadioReport.ThoraxCT.Domain.Models;

namespace RadioReport.ThoraxCT.Domain.Managers
{
    public class LungInterstitiumFindingPresetManager : Manager<LungInterstitiumFindingPreset, ILungInterstitiumFindingPresetRepository>, ILungInterstitiumFindingPresetManager
    {
        public LungInterstitiumFindingPresetManager(ILungInterstitiumFindingPresetRepository repository) : base(repository)
        {
        }

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis() => await Repository.GetAllAvailableDiagnosis();

        public async Task<IEnumerable<LungInterstitiumFindingPreset>> GetByDiagnosisValue(LungInterstitiumDiagnosisType diagnosis, Guid reportId) =>
            await Repository.GetByDiagnosisValue(diagnosis);
    }
}