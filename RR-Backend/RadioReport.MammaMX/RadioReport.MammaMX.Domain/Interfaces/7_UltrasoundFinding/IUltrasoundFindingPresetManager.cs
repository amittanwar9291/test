using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.MammaMX.Domain.Enums.UltrasoundFinding;
using RadioReport.MammaMX.Domain.Models;

namespace RadioReport.MammaMX.Domain.Interfaces
{
    public interface IUltrasoundFindingPresetManager : IManager<UltrasoundFindingPreset>, IPresetBaseManager
    {
        Task<IEnumerable<string>> GetAllAvailableDiagnosis(UltrasoundFindingType findingType);

        Task<UltrasoundFindingPreset> GetByDiagnosisValue(MassDiagnosisType diagnosis, Guid reportId);
    }
}