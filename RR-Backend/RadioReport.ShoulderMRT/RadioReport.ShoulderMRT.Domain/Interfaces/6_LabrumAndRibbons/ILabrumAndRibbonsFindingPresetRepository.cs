using System.Threading.Tasks;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.ShoulderMRT.Domain.Enums;
using RadioReport.ShoulderMRT.Domain.Models;

namespace RadioReport.ShoulderMRT.Domain.Interfaces
{
    public interface ILabrumAndRibbonsFindingPresetRepository : IRepository<LabrumAndRibbonsFindingPreset>, IPresetBaseRepository
    {
        Task<LabrumAndRibbonsFindingPreset> GetByDiagnosisValue(DiagnosisType diagnosis);
    }
}
