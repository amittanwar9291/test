using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.PelvisMRT.Domain.Enums.FemaleGender;
using RadioReport.PelvisMRT.Domain.Models;

namespace RadioReport.PelvisMRT.Domain.Interfaces
{
    public interface IFemaleGenderFindingPresetManager : IManager<FemaleGenderFindingPreset>, IPresetBaseManager
    {
        Task<IEnumerable<string>> GetAllAvailableDiagnosis(FemaleGenderFindingType findingType);

        Task<FemaleGenderFindingPreset> GetByDiagnosisValue(FemaleGenderFindingPresetRequest diagnosisParams, Guid reportId);
    }
}
