using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.HeadMRT.Domain.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RadioReport.HeadMRT.Domain.Interfaces
{
    public interface ICortexFindingPresetManager : IManager<CortexFindingPreset>, IPresetBaseManager
    {
        Task<CortexFindingPreset> GetByDiagnosisValue(CortexFindingPresetRequest diagnosisParams, Guid reportId);
        Task<IEnumerable<string>> GetAllAvailableDiagnosis(CortexFindingPresetRequest diagnosisParams);
    }
}
