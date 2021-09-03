using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.AbdomenMRT.Domain.Enums.Liver;
using RadioReport.AbdomenMRT.Domain.Models;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Interfaces;

namespace RadioReport.AbdomenMRT.Domain.Interfaces
{
    public interface ILiverFindingPresetManager : IManager<LiverFindingPreset>, IPresetBaseManager
    {
        Task<IEnumerable<string>> GetAllAvailableDiagnosis(LiverFindingType findingType);

        Task<LiverFindingPreset> GetByDiagnosisValue(LiverDifferentialDiagnosisType diagnosis, Guid reportId);
    }
}
