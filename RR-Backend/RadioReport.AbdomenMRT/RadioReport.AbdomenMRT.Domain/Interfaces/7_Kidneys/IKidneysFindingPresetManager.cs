using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.AbdomenMRT.Domain.Enums.Kidneys;
using RadioReport.AbdomenMRT.Domain.Models;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Interfaces;

namespace RadioReport.AbdomenMRT.Domain.Interfaces
{
    public interface IKidneysFindingPresetManager : IManager<KidneysFindingPreset>, IPresetBaseManager
    {
        Task<IEnumerable<string>> GetAllAvailableDiagnosis(KidneysFindingType findingType);

        Task<KidneysFindingPreset> GetByDiagnosisValue(KidneysDifferentialDiagnosisType diagnosis, Guid reportId);
    }
}
