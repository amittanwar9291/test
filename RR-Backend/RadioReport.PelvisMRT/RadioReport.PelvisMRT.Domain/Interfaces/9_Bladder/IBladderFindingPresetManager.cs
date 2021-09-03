using System;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.PelvisMRT.Domain.Enums.Bladder;
using RadioReport.PelvisMRT.Domain.Models;

namespace RadioReport.PelvisMRT.Domain.Interfaces
{
    public interface IBladderFindingPresetManager : IManager<BladderFindingPreset>, IPresetBaseManager
    {
        Task<BladderFindingPreset> GetByDiagnosisValue(BladderDiagnosisType diagnosis, Guid reportId);
    }
}