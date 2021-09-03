using System.Threading.Tasks;
using RadioReport.CardioMRT.Domain.Enums.SpatialRequirement;
using RadioReport.CardioMRT.Domain.Models;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Interfaces;

namespace RadioReport.CardioMRT.Domain.Interfaces
{
    public interface ISpatialRequirementFindingPresetRepository: IRepository<SpatialRequirementFindingPreset>, IPresetBaseRepository
    {
        Task<SpatialRequirementFindingPreset> GetByDiagnosisValue(SpatialRequirementDiagnosisType diagnosis);
    }
}
