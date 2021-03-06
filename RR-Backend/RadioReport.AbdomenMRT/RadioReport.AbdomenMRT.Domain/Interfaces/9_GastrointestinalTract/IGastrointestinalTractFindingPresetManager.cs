using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.AbdomenMRT.Domain.Enums.GastrointestinalTract;
using RadioReport.AbdomenMRT.Domain.Models;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Interfaces;

namespace RadioReport.AbdomenMRT.Domain.Interfaces
{
    public interface IGastrointestinalTractFindingPresetManager : IManager<GastrointestinalTractFindingPreset>, IPresetBaseManager
    {
        Task<IEnumerable<string>> GetAllAvailableDiagnosis(GastrointestinalTractFindingType findingType);

        Task<GastrointestinalTractFindingPreset> GetByDiagnosisValue(GastrointestinalDifferentialDiagnosisType diagnosis, Guid reportId);
    }
}
