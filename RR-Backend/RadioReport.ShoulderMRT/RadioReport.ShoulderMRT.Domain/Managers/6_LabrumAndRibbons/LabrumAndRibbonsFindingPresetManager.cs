using System;
using RadioReport.Common.Logic.Managers;
using RadioReport.ShoulderMRT.Domain.Interfaces;
using RadioReport.ShoulderMRT.Domain.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RadioReport.ShoulderMRT.Domain.Managers
{
    public class LabrumAndRibbonsFindingPresetManager : Manager<LabrumAndRibbonsFindingPreset, ILabrumAndRibbonsFindingPresetRepository>, ILabrumAndRibbonsFindingPresetManager
    {
        public LabrumAndRibbonsFindingPresetManager(ILabrumAndRibbonsFindingPresetRepository repository) : base(repository)
        {
        }

        public async Task<LabrumAndRibbonsFindingPreset> GetByDiagnosisValue(LabrumAndRibbonsFindingPresetRequest diagnosisParams)
        {
            if (diagnosisParams == null) throw new ArgumentNullException(nameof(diagnosisParams));

            return await Repository.GetByDiagnosisValue(diagnosisParams.Diagnosis);
        }

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis() => await Repository.GetAllAvailableDiagnosis();
    }
}