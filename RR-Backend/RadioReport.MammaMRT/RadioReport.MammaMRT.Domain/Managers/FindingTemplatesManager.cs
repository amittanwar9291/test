using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RadioReport.Common.Logic.Managers;
using RadioReport.Common.Module.Logic.Enums.Technology;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.MammaMRT.Domain.Enums;
using RadioReport.MammaMRT.Domain.Interfaces;
using RadioReport.MammaMRT.Domain.Models;

namespace RadioReport.MammaMRT.Domain.Managers
{
    public class FindingTemplatesManager : Manager<DiagnosisFindingTemplate, IFindingTemplatesRepository>, IFindingTemplatesManager
    {
        private readonly IPageManager<TechnologyPage> _technologyPageManager;

        public FindingTemplatesManager(IFindingTemplatesRepository repository, IPageManager<TechnologyPage> technologyPageManager) : base(repository)
        {
            _technologyPageManager = technologyPageManager;
        }

        public async Task<DiagnosisFindingTemplate> GetByDiagnosisValue(DiagnosisType diagnosisValue, Guid reportId)
        {
            var technologyPage = await _technologyPageManager.GetByReportId(reportId);

            var preset = await Repository.GetByDiagnosisValue(diagnosisValue);

            if (technologyPage?.CMReinforcedType != CMReinforcedType.Yes && preset != null)
            {
                preset.EnhancementType = EnhancementType.None;
                preset.KMDynamicInitialType = KMDynamicsInitialType.None;
                preset.KMDynamicDelayedType = KMDynamicsDelayedType.None;
            }

            return preset;
        }

        public async Task<IEnumerable<string>> GetAllAvailableDiagnosis() => await Repository.GetAllAvailableDiagnosis();
    }
}
