using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Models.Import;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Enums.Technology;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.Common.Module.Logic.Services;
using RadioReport.ThoraxCT.Domain.Interfaces;
using RadioReport.ThoraxCT.Domain.Models;

namespace RadioReport.ThoraxCT.Domain.Services
{
    public class ThoraxCTImportReportService : ImportReportService
    {
        private readonly IPageManager<StudyAreaPage> _studyAreaPageManager;
        private readonly IPageManager<TechnologyPage> _technologyPageManager;

        public ThoraxCTImportReportService(
            ILogger<ImportReportService> logger,
            IKafkaProducer kafkaProducer,
            ModuleContext moduleContext,
            IDicomValueParser dicomValueParser,
            HttpAuthContext httpAuthContext,
            IReportManager reportManager,
            IReportPageService reportPageService,
            IPageManager<StudyAreaPage> studyAreaPageManager,
            IPageManager<TechnologyPage> technologyPageManager
        ) : base(logger, kafkaProducer, moduleContext, dicomValueParser, httpAuthContext, reportManager, reportPageService)
        {
            _studyAreaPageManager = studyAreaPageManager;
            _technologyPageManager = technologyPageManager;
        }

        protected override async Task<Guid> CreateLocalizationPageAndImport(ICollection<StringImportValue> importValues, PatientInformation patientInformation,
            Guid reportId)
        {
            var studyAreaPage = new StudyAreaPage
            {
                ReportId = reportId,
                PatientInformation = patientInformation
            };
            SetDicomValues(importValues, studyAreaPage);
            studyAreaPage = await _studyAreaPageManager.AddAsync(studyAreaPage);

            return studyAreaPage.Id;
        }

        protected override async Task<Guid> CreateTechnologyPageAndImport(ICollection<SeriesImportValue> seriesImportValues, Guid reportId)
        {
            var technologyPage = new TechnologyPage
            {
                ReportId = reportId,
                SequencesType = SequencesType.Auto,
                CMSideEffects = new List<CMSideEffect> { new CMSideEffect() }
            };

            technologyPage = await _technologyPageManager.AddAsync(technologyPage);

            return technologyPage.Id;
        }
    }
}
