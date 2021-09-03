using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.NeckMRT.Domain.Enums.Larynx;
using RadioReport.NeckMRT.Domain.Models;

namespace RadioReport.NeckMRT.Domain.Interfaces
{
    public interface ILarynxFindingPresetManager : IManager<LarynxFindingPreset>, IPresetBaseManager
    {
        Task<IEnumerable<string>> GetAllAvailableDiagnosis(LarynxFindingType findingType);

        Task<LarynxFindingPreset> GetByDiagnosisValue(DifferentialDiagnosisType diagnosis, Guid reportId);
    }
}