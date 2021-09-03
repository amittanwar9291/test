using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.HeadCT.Domain.Enums.Examination;
using RadioReport.HeadCT.Domain.Interfaces;
using RadioReport.HeadCT.Domain.Models;
using System;
using System.Collections.Generic;

namespace RadioReport.HeadCT.Domain.Managers
{
    public class ExaminationPageManager: PageManagerBase<ExaminationPage, IExaminationPageRepository>
    {
        public override string PageTypeName => PageTypeNames.HeadCtExamination;

        protected override List<Type> FindingTypes => new List<Type> { typeof(ExaminationFindingType) };

        public ExaminationPageManager(IExaminationPageRepository repository, IReportManager reportManager, IReportService reportService,
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }
    }
}
