using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.HeadMRT.Domain.Enums.BasalNuclei;
using RadioReport.HeadMRT.Domain.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RadioReport.HeadMRT.Domain.Interfaces
{
    public interface IBasalNucleiFindingPresetManager : IManager<BasalNucleiFindingPreset>, IPresetBaseManager
    {
        Task<IEnumerable<string>> GetAllAvailableDiagnosis(BasalNucleiFindingType findingType);

        Task<BasalNucleiFindingPreset> GetByDiagnosisValue(BasalNucleiDiagnosisType diagnosis, Guid reportId);
    }
}
