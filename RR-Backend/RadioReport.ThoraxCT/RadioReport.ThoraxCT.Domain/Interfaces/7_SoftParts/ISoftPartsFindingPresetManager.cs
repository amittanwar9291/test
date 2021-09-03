using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.ThoraxCT.Domain.Enums;
using RadioReport.ThoraxCT.Domain.Models;

namespace RadioReport.ThoraxCT.Domain.Interfaces
{
    public interface ISoftPartsFindingPresetManager : IManager<SoftPartsFindingPreset>, IPresetBaseManager
    {
        Task<IEnumerable<string>> GetAllAvailableDiagnosis(SoftPartsFindingType findingType);

        Task<SoftPartsFindingPreset> GetByDiagnosisValue(SoftPartsFindingPresetRequest diagnosisParams, Guid reportId);
    }
}