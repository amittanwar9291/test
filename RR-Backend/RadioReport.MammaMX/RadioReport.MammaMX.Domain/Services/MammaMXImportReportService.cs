using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Models.Import;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.Common.Module.Logic.Services;
using RadioReport.MammaMX.Domain.Interfaces;
using RadioReport.MammaMX.Domain.Models;

namespace RadioReport.MammaMX.Domain.Services
{
    public class MammaMXImportReportService : ImportReportService
    {
        private readonly IPageManager<PatientIndicationPage> _patientIndicationPageManager;
        private readonly IPageManager<TechnologyPage> _technologyPageManager;

        public MammaMXImportReportService(
            ILogger<MammaMXImportReportService> logger,
            IKafkaProducer kafkaProducer,
            ModuleContext moduleContext,
            IDicomValueParser dicomValueParser,
            HttpAuthContext httpAuthContext,
            IPageManager<PatientIndicationPage> patientIndicationPageManager,
            IPageManager<TechnologyPage> technologyPageManager,
            IReportManager reportManager,
            IReportPageService reportPageService
        ) : base(logger, kafkaProducer, moduleContext, dicomValueParser, httpAuthContext, reportManager, reportPageService)
        {
            _patientIndicationPageManager = patientIndicationPageManager;
            _technologyPageManager = technologyPageManager;
        }

        protected override async Task<Guid> CreateLocalizationPageAndImport(ICollection<StringImportValue> importValues, PatientInformation patientInformation,
            Guid reportId)
        {
            var patientIndicationPage = new PatientIndicationPage
            {
                ReportId = reportId,
                PatientInformation = patientInformation
            };
            SetDicomValues(importValues, patientIndicationPage);
            patientIndicationPage = await _patientIndicationPageManager.AddAsync(patientIndicationPage);

            return patientIndicationPage.Id;
        }

        protected override async Task<Guid> CreateTechnologyPageAndImport(ICollection<SeriesImportValue> seriesImportValues, Guid reportId)
        {
            var technologyPage = new TechnologyPage
            {
                ReportId = reportId,
            };
            technologyPage = await _technologyPageManager.AddAsync(technologyPage);

            return technologyPage.Id;
        }
    }
}
