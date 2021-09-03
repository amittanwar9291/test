using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.SpineMRT.Domain.Models;

namespace RadioReport.SpineMRT.Domain.Interfaces
{
    public interface ISpinalCanalFindingPresetRepository : IRepository<SpinalCanalFindingPreset>, IPresetBaseRepository
    {
        Task<IEnumerable<string>> GetAllAvailableDiagnosis(SpinalCanalFindingPresetRequest diagnosisParams);

        Task<SpinalCanalFindingPreset> GetByDiagnosisValue(SpinalCanalFindingPresetRequest diagnosis);
    }
}
