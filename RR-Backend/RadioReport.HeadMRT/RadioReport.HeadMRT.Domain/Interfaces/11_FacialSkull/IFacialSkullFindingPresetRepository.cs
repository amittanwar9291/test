using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.HeadMRT.Domain.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RadioReport.HeadMRT.Domain.Interfaces
{
    public interface IFacialSkullFindingPresetRepository : IRepository<FacialSkullFindingPreset>, IPresetBaseRepository
    {
        Task<FacialSkullFindingPreset> GetByDiagnosisValue(FacialSkullFindingPresetRequest diagnosisParams);
        Task<IEnumerable<string>> GetAllAvailableDiagnosis(FacialSkullFindingPresetRequest diagnosisParams);
    }
}
