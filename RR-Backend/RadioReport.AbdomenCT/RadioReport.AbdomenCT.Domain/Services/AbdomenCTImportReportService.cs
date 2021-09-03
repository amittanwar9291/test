using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using RadioReport.AbdomenCT.Domain.Models;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Models.Import;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.Common.Module.Logic.Services;

namespace RadioReport.AbdomenCT.Domain.Services
{
    public class AbdomenCTImportReportService : ImportReportService
    {
        private readonly IPageManager<AreaOfInvestigationPage> _areaOfInvestigationPageManager;
        private readonly IPageManager<TechnologyPage> _technologyPageManager;

        public AbdomenCTImportReportService(
            ILogger<AbdomenCTImportReportService> logger,
            IKafkaProducer kafkaProducer,
            ModuleContext moduleContext,
            IDicomValueParser dicomValueParser,
            HttpAuthContext httpAuthContext,
            IPageManager<AreaOfInvestigationPage> areaOfInvestigationPageManager,
            IPageManager<TechnologyPage> technologyPageManager,
            IReportManager reportManager,
            IReportPageService reportPageService
        ) : base(logger, kafkaProducer, moduleContext, dicomValueParser, httpAuthContext, reportManager, reportPageService)
        {
            _areaOfInvestigationPageManager = areaOfInvestigationPageManager;
            _technologyPageManager = technologyPageManager;
        }

        protected override async Task<Guid> CreateLocalizationPageAndImport(ICollection<StringImportValue> importValues, PatientInformation patientInformation,
            Guid reportId)
        {
            var areaOfInvestigationPage = new AreaOfInvestigationPage
            {
                ReportId = reportId,
                PatientInformation = patientInformation
            };
            SetDicomValues(importValues, areaOfInvestigationPage);
            areaOfInvestigationPage = await _areaOfInvestigationPageManager.AddAsync(areaOfInvestigationPage);

            return areaOfInvestigationPage.Id;
        }
    }
}