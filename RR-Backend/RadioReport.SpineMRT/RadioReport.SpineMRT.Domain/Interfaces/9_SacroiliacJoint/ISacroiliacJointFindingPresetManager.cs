using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.SpineMRT.Domain.Enums;
using RadioReport.SpineMRT.Domain.Models;

namespace RadioReport.SpineMRT.Domain.Interfaces
{
    public interface ISacroiliacJointFindingPresetManager : IManager<SacroiliacJointFindingPreset>, IPresetBaseManager
    {
        Task<IEnumerable<string>> GetAllAvailableDiagnosis(SacroiliacJointFindingType findingType);

        Task<SacroiliacJointFindingPreset> GetByDiagnosisValue(SacroiliacJointDiagnosisType diagnosis, Guid reportId);
    }
}