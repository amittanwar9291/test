using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.NeckMRT.Domain.Enums.Pharynx;
using RadioReport.NeckMRT.Domain.Models;

namespace RadioReport.NeckMRT.Domain.Interfaces
{
    public interface IPharynxFindingPresetManager : IManager<PharynxFindingPreset>, IPresetBaseManager
    {
        Task<IEnumerable<string>> GetAllAvailableDiagnosis(PharynxFindingType findingType);

        Task<PharynxFindingPreset> GetByDiagnosisValue(DifferentialDiagnosisType diagnosis, Guid reportId);
    }
}