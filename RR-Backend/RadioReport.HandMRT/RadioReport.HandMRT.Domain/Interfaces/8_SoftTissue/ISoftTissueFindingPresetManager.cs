using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.HandMRT.Domain.Enums.SoftTissue;
using RadioReport.HandMRT.Domain.Models;

namespace RadioReport.HandMRT.Domain.Interfaces
{
    public interface ISoftTissueFindingPresetManager : IManager<SoftTissueFindingPreset>, IPresetBaseManager
    {
        Task<IEnumerable<string>> GetAllAvailableDiagnosis(SoftTissueFindingType findingType);

        Task<SoftTissueFindingPreset> GetByDiagnosisValue(DifferentialDiagnosisType diagnosis, Guid reportId);
    }
}
