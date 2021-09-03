using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.HipMRT.Domain.Enums;
using RadioReport.HipMRT.Domain.Models.CapsuleAndLigaments;
using System.Threading.Tasks;

namespace RadioReport.HipMRT.Domain.Interfaces
{
    public interface ICapsuleAndLigamentsFindingPresetRepository : IRepository<CapsuleAndLigamentsFindingPreset>, IPresetBaseRepository
    {
        Task<CapsuleAndLigamentsFindingPreset> GetByDiagnosisValue(SynoviaDifferentialDiagnosis diagnosis);
    }
}