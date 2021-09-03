using System;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.ShoulderMRT.Domain.Enums;
using RadioReport.ShoulderMRT.Domain.Models;

namespace RadioReport.ShoulderMRT.Domain.Interfaces
{
    public interface IBonesFindingPresetManager : IManager<BonesFindingPreset>, IPresetBaseManager
    {
        Task<BonesFindingPreset> GetByDiagnosisValue(TumorDifferentialDiagnosis diagnosis, Guid reportId);
    }
}