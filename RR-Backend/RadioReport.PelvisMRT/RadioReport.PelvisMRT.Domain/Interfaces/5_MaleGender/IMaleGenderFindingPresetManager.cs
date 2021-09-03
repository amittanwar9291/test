using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.PelvisMRT.Domain.Models;

namespace RadioReport.PelvisMRT.Domain.Interfaces
{
    public interface IMaleGenderFindingPresetManager : IManager<MaleGenderFindingPreset>, IPresetBaseManager
    {
        Task<MaleGenderFindingPreset> GetByDiagnosisValue(MaleGenderFindingPresetRequest diagnosisParams, Guid reportId);
        Task<IEnumerable<string>> GetAllAvailableDiagnosis(MaleGenderFindingPresetRequest diagnosisParams);
    }
}