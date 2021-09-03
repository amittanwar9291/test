using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.HipMRT.Domain.Enums;
using RadioReport.HipMRT.Domain.Models.CapsuleAndLigaments;
using System;
using System.Threading.Tasks;
using RadioReport.Common.Module.Logic.Enums.Technology;

namespace RadioReport.HipMRT.Domain.Interfaces
{
    public interface ICapsuleAndLigamentsFindingPresetManager : IManager<CapsuleAndLigamentsFindingPreset>, IPresetBaseManager
    {
        Task<CapsuleAndLigamentsFindingPreset> GetByDiagnosisValue(SynoviaDifferentialDiagnosis diagnosis, Guid reportId);
    }
}
