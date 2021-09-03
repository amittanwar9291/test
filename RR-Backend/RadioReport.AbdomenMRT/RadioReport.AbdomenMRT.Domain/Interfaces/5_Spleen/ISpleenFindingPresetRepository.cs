using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.AbdomenMRT.Domain.Enums.Spleen;
using RadioReport.AbdomenMRT.Domain.Models;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Interfaces;

namespace RadioReport.AbdomenMRT.Domain.Interfaces
{
    public interface ISpleenFindingPresetRepository : IRepository<SpleenFindingPreset>, IPresetBaseRepository
    {
        Task<IEnumerable<string>> GetAllAvailableDiagnosis(SpleenFindingType findingType);

        Task<SpleenFindingPreset> GetByDiagnosisValue(SpleenDiagnosisType diagnosis);
    }
}
