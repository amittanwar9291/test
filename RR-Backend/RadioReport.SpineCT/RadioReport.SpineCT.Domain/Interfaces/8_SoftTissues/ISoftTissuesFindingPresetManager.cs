using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.SpineCT.Domain.Enums.SoftTissues;
using RadioReport.SpineCT.Domain.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RadioReport.SpineCT.Domain.Interfaces
{
    public interface ISoftTissuesFindingPresetManager : IManager<SoftTissuesFindingPreset>, IPresetBaseManager
    {
        Task<IEnumerable<string>> GetAllAvailableDiagnosis(SoftTissuesFindingType findingType);

        Task<SoftTissuesFindingPreset> GetByDiagnosisValue(SoftTissuesDiagnosisType diagnosis, Guid reportId);
    }
}
