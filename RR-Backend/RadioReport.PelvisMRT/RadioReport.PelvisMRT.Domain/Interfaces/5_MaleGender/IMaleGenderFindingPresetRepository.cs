using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.PelvisMRT.Domain.Models;

namespace RadioReport.PelvisMRT.Domain.Interfaces
{
    public interface IMaleGenderFindingPresetRepository : IRepository<MaleGenderFindingPreset>, IPresetBaseRepository
    {
        Task<MaleGenderFindingPreset> GetByDiagnosisValue(MaleGenderFindingPresetRequest diagnosisParams);
        Task<IEnumerable<string>> GetAllAvailableDiagnosis(MaleGenderFindingPresetRequest diagnosisParams);
    }
}