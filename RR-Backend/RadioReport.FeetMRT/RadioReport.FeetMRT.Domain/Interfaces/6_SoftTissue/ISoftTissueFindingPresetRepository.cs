using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.FeetMRT.Domain.Enums.SoftTissue;
using RadioReport.FeetMRT.Domain.Models;

namespace RadioReport.FeetMRT.Domain.Interfaces
{
    public interface ISoftTissueFindingPresetRepository : IRepository<SoftTissueFindingPreset>, IPresetBaseRepository
    {
        Task<IEnumerable<string>> GetAllAvailableDiagnosis(SoftTissueFindingType findingType);

        Task<SoftTissueFindingPreset> GetByDiagnosisValue(DifferentialDiagnosisType diagnosis);
    }
}
