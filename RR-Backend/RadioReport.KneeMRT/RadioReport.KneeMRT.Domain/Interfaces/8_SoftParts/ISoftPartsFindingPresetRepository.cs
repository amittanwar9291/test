using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.KneeMRT.Domain.Enums;
using RadioReport.KneeMRT.Domain.Models;
using RadioReport.KneeMRT.SoftParts.Domain.Enums;

namespace RadioReport.KneeMRT.Domain.Interfaces
{
    public interface ISoftPartsFindingPresetRepository : IRepository<SoftPartsFindingPreset>, IPresetBaseRepository
    {
        Task<IEnumerable<string>> GetAllAvailableDiagnosis(SoftPartsFindingType findingType);

        Task<SoftPartsFindingPreset> GetByDiagnosisValue(SoftPartsDiagnosisType diagnosis);
    }
}