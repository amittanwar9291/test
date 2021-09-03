using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Managers;
using RadioReport.Common.Module.Logic.Enums.Technology;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.PelvisMRT.Domain.Enums.MaleGender;
using RadioReport.PelvisMRT.Domain.Interfaces;
using RadioReport.PelvisMRT.Domain.Models;

namespace RadioReport.PelvisMRT.Domain.Managers
{
    public class MaleGenderFindingPresetManager : Manager<MaleGenderFindingPreset, IMaleGenderFindingPresetRepository>, IMaleGenderFindingPresetManager
    {
        private readonly IPageManager<TechnologyPage> _technologyPageManager;

        public MaleGenderFindingPresetManager(IMaleGenderFindingPresetRepository repository, IPageManager<TechnologyPage> technologyPageManager) : base(repository)
        {
            _technologyPageManager = technologyPageManager;
        }

        public async Task<MaleGenderFindingPreset> GetByDiagnosisValue(MaleGenderFindingPresetRequest diagnosisParams, Guid reportId)
        {
            var technologyPage = await _technologyPageManager.GetByReportId(reportId);
            var preset = await Repository.GetByDiagnosisValue(diagnosisParams);

            if (technologyPage?.CMReinforcedType != CMReinforcedType.Yes && preset != null)
            {
                preset.PenisMassCMEnhancementType = CMEnhancementType.None;
                preset.ScrotumMassCMEnhancementType = CMEnhancementType.None;
                preset.ScrotumMassHomogeneity02Type = HomogeneityType.None;
            }

            return preset;
        }
        
        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis() => await Repository.GetAllAvailableDiagnosis();

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis(MaleGenderFindingPresetRequest diagnosisParams) =>
            await Repository.GetAllAvailableDiagnosis(diagnosisParams);
    }
}
