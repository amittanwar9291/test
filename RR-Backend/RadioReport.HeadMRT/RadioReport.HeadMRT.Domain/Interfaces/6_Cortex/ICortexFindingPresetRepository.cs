using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.HeadMRT.Domain.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RadioReport.HeadMRT.Domain.Interfaces
{
    public interface ICortexFindingPresetRepository : IRepository<CortexFindingPreset>, IPresetBaseRepository
    {
        Task<CortexFindingPreset> GetByDiagnosisValue(CortexFindingPresetRequest diagnosisParams);
        Task<IEnumerable<string>> GetAllAvailableDiagnosis(CortexFindingPresetRequest diagnosisParams);
    }
}
