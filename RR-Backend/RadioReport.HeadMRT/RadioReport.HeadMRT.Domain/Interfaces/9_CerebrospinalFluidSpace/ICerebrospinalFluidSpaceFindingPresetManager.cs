using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.HeadMRT.Domain.Enums.CerebrospinalFluidSpace;
using RadioReport.HeadMRT.Domain.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RadioReport.HeadMRT.Domain.Interfaces
{
    public interface ICerebrospinalFluidSpaceFindingPresetManager : IManager<CerebrospinalFluidSpaceFindingPreset>, IPresetBaseManager
    {
        Task<IEnumerable<string>> GetAllAvailableDiagnosis(CerebrospinalFluidSpaceFindingType findingType);

        Task<CerebrospinalFluidSpaceFindingPreset> GetByDiagnosisValue(CerebrospinalMassDiagnosisType diagnosis, Guid reportId);
    }
}
