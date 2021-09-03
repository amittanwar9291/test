using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.MammaMX.Domain.Enums.MammographyFinding;
using RadioReport.MammaMX.Domain.Models;

namespace RadioReport.MammaMX.Domain.Interfaces
{
    public interface IMammographyFindingPresetRepository : IRepository<MammographyFindingPreset>, IPresetBaseRepository
    {
        Task<IEnumerable<string>> GetAllAvailableDiagnosis(MammographyFindingType findingType);

        Task<MammographyFindingPreset> GetByDiagnosisValue(DiagnosisType diagnosis);
    }
}
