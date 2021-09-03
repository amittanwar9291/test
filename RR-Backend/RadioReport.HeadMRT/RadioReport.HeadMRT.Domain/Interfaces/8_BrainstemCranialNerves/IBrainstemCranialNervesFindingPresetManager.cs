using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.HeadMRT.Domain.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RadioReport.HeadMRT.Domain.Interfaces
{
    public interface IBrainstemCranialNervesFindingPresetManager : IManager<BrainstemCranialNervesFindingPreset>, IPresetBaseManager
    {
        Task<IEnumerable<string>> GetAllAvailableDiagnosis(BrainstemCranialNervesFindingPresetRequest diagnosisParams);

        Task<BrainstemCranialNervesFindingPreset> GetByDiagnosisValue(BrainstemCranialNervesFindingPresetRequest diagnosisParams, Guid reportId);
    }
}