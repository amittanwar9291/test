using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.HeadMRT.Domain.Enums.Meninges;
using RadioReport.HeadMRT.Domain.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RadioReport.HeadMRT.Domain.Interfaces
{
    public interface IMeningesFindingPresetManager : IManager<MeningesFindingPreset>, IPresetBaseManager
    {
        Task<IEnumerable<string>> GetAllAvailableDiagnosis(MeningesFindingType findingType);

        Task<MeningesFindingPreset> GetByDiagnosisValue(MeningesMassDiagnosisType diagnosis, Guid reportId);
    }
}
