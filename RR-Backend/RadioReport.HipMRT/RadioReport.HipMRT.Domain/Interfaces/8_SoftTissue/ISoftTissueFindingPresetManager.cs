using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.HipMRT.Domain.Enums.SoftTissue;
using RadioReport.HipMRT.Domain.Models;

namespace RadioReport.HipMRT.Domain.Interfaces
{
    public interface ISoftTissueFindingPresetManager : IManager<SoftTissueFindingPreset>, IPresetBaseManager
    {
        Task<IEnumerable<string>> GetAllAvailableDiagnosis(SoftTissueFindingType findingType);

        Task<SoftTissueFindingPreset> GetByDiagnosisValue(DifferentialDiagnosisType diagnosis, Guid reportId);
    }
}