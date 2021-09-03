using RadioReport.Common.Module.Logic.Managers;
using RadioReport.AngiographyCT.Domain.Interfaces;
using RadioReport.AngiographyCT.Domain.Models;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;

namespace RadioReport.AngiographyCT.Domain.Managers
{
    public class SummaryPageManager : PageManagerBase<SummaryPage, ISummaryPageRepository>
    {
        public override string PageTypeName => PageTypeNames.AngiographyCtSummary;

        public SummaryPageManager(ISummaryPageRepository repository, IReportManager reportManager, IReportService reportService,
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }
    }
}
