using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.HipMRT.Bones.Domain.Enums;
using RadioReport.HipMRT.Domain.Models.Bones;
using System;
using System.Threading.Tasks;

namespace RadioReport.HipMRT.Domain.Interfaces
{
    public interface IBonesFindingPresetManager : IManager<BonesFindingPreset>, IPresetBaseManager
    {
        Task<BonesFindingPreset> GetByDiagnosisValue(MassOsteolysisDifferentialDiagnosisType diagnosis, Guid reportId);
    }
}
