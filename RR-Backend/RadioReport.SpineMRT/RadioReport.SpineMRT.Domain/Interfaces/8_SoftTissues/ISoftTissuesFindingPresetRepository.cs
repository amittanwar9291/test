using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.SpineMRT.Domain.Enums;
using RadioReport.SpineMRT.Domain.Models;

namespace RadioReport.SpineMRT.Domain.Interfaces
{
    public interface ISoftTissuesFindingPresetRepository : IRepository<SoftTissuesFindingPreset>, IPresetBaseRepository
    {
        Task<IEnumerable<string>> GetAllAvailableDiagnosis(SoftTissuesFindingType findingType);

        Task<SoftTissuesFindingPreset> GetByDiagnosisValue(SoftTissuesDiagnosisType diagnosis);
    }
}
