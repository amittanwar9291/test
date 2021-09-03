using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.SpineCT.Domain.Enums.Bones;
using RadioReport.SpineCT.Domain.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RadioReport.SpineCT.Domain.Interfaces
{
    public interface IBonesFindingPresetManager : IManager<BonesFindingPreset>, IPresetBaseManager
    {
        Task<IEnumerable<string>> GetAllAvailableDiagnosis(BonesFindingType findingType);

        Task<BonesFindingPreset> GetByDiagnosisValue(BonesDiagnosisType diagnosis, Guid reportId);
    }
}
