using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.AbdomenMRT.Domain.Enums.Pancreas;
using RadioReport.AbdomenMRT.Domain.Enums.Spleen;
using RadioReport.AbdomenMRT.Domain.Models;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Interfaces;

namespace RadioReport.AbdomenMRT.Domain.Interfaces
{
    public interface IPancreasFindingPresetManager : IManager<PancreasFindingPreset>, IPresetBaseManager
    {
        Task<IEnumerable<string>> GetAllAvailableDiagnosis(PancreasFindingType findingType);

        Task<PancreasFindingPreset> GetByDiagnosisValue(MassDifferentialDiagnosisType diagnosis, Guid reportId);
    }
}
