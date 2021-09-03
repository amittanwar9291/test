using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.ElbowMRT.Domain.Enums;
using RadioReport.ElbowMRT.Domain.Models;

namespace RadioReport.ElbowMRT.Domain.Interfaces
{
    public interface ISoftTissueFindingPresetManager : IManager<SoftTissueFindingPreset>, IPresetBaseManager
    {
        Task<IEnumerable<string>> GetAllAvailableDiagnosis(SoftTissueFindingType findingType);

        Task<SoftTissueFindingPreset> GetByDiagnosisValue(SoftTissueDifferentialDiagnosisType diagnosis, Guid reportId);
    }
}