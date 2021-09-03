using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.NeckMRT.Domain.Enums.Bones;
using RadioReport.NeckMRT.Domain.Models;

namespace RadioReport.NeckMRT.Domain.Interfaces
{
    public interface IBonesFindingPresetManager : IManager<BonesFindingPreset>, IPresetBaseManager
    {
        Task<IEnumerable<string>> GetAllAvailableDiagnosis(BonesFindingType findingType);

        Task<BonesFindingPreset> GetByDiagnosisValue(SpatialNeoplasmDifferentialDiagnosisType diagnosis, Guid reportId);
    }
}