using System;
using System.Threading.Tasks;
using RadioReport.CardioMRT.Domain.Enums.SpatialRequirement;
using RadioReport.CardioMRT.Domain.Models;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Interfaces;

namespace RadioReport.CardioMRT.Domain.Interfaces
{
    public interface ISpatialRequirementFindingPresetManager: IManager<SpatialRequirementFindingPreset>, IPresetBaseManager
    {
        Task<SpatialRequirementFindingPreset> GetByDiagnosisValue(SpatialRequirementDiagnosisType diagnosis, Guid reportId);
    }
}
