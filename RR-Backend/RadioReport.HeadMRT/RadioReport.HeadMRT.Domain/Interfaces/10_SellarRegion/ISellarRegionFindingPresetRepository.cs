using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.HeadMRT.Domain.Enums.SellarRegion;
using RadioReport.HeadMRT.Domain.Models;

namespace RadioReport.HeadMRT.Domain.Interfaces
{
    public interface ISellarRegionFindingPresetRepository : IRepository<SellarRegionFindingPreset>, IPresetBaseRepository
    {
        Task<IEnumerable<string>> GetAllAvailableDiagnosis(SellarRegionFindingType findingType);

        Task<SellarRegionFindingPreset> GetByDiagnosisValue(SellarRegionDiagnosisType diagnosis);
    }
}