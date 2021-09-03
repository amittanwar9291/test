using RadioReport.Common.Module.Logic.Managers;
using RadioReport.AngiographyMRT.Domain.Interfaces;
using RadioReport.AngiographyMRT.Domain.Models;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;

namespace RadioReport.AngiographyMRT.Domain.Managers
{
    public class SummaryPageManager : PageManagerBase<SummaryPage, ISummaryPageRepository>
    {
        public override string PageTypeName => PageTypeNames.AngiographyMrtSummary;

        public SummaryPageManager(ISummaryPageRepository repository, IReportManager reportManager, IReportService reportService,
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }
    }
}
