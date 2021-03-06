using System.Threading.Tasks;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.ShoulderMRT.Domain.Models;

namespace RadioReport.ShoulderMRT.Domain.Interfaces
{
    public interface ILabrumAndRibbonsFindingPresetManager : IManager<LabrumAndRibbonsFindingPreset>, IPresetBaseManager
    {
        Task<LabrumAndRibbonsFindingPreset> GetByDiagnosisValue(LabrumAndRibbonsFindingPresetRequest diagnosisParams);
    }
}
