using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.ElbowMRT.Domain.Enums;
using RadioReport.ElbowMRT.Domain.Models;

namespace RadioReport.ElbowMRT.Domain.Interfaces
{
    public interface ISoftTissueFindingPresetRepository : IRepository<SoftTissueFindingPreset>, IPresetBaseRepository
    {
        Task<IEnumerable<string>> GetAllAvailableDiagnosis(SoftTissueFindingType findingType);

        Task<SoftTissueFindingPreset> GetByDiagnosisValue(SoftTissueDifferentialDiagnosisType diagnosis);
    }
}