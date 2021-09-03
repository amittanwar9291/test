using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.HandMRT.Domain.Enums;
using RadioReport.HandMRT.Domain.Models;

namespace RadioReport.HandMRT.Domain.Interfaces
{
    public interface IBonesFindingPresetRepository : IRepository<BonesFindingPreset>, IPresetBaseRepository
    {
        Task<IEnumerable<string>> GetAllAvailableDiagnosis(BonesFindingType findingType);

        Task<BonesFindingPreset> GetByDiagnosisValue(TumorDifferentialDiagnosisType diagnosis);
    }
}
