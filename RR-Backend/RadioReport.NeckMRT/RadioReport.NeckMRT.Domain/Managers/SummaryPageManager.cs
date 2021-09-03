using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.NeckMRT.Domain.Interfaces;
using RadioReport.NeckMRT.Domain.Models;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Models;
using System.Collections.Generic;
using System;
using RadioReport.NeckMRT.Domain.Enums.Summary;

namespace RadioReport.NeckMRT.Domain.Managers
{
    public class SummaryPageManager : PageManagerBase<SummaryPage, ISummaryPageRepository>
    {
        public override string PageTypeName => PageTypeNames.NeckMrtSummary;
        
        protected override List<Type> FindingTypes => new List<Type> { typeof(TNMClassificationType) };

        public SummaryPageManager(ISummaryPageRepository repository, IReportManager reportManager, IReportService reportService,
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }
    }
}
