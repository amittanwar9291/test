using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.MammaMRT.Domain.Interfaces;
using RadioReport.MammaMRT.Domain.Models;

namespace RadioReport.MammaMRT.Domain.Managers
{
    public class LymphsPageManager : PageManagerBase<LymphsPage, ILymphsPageRepository>
    {
        public override string PageTypeName => PageTypeNames.MammaMrtLymphs;

        public LymphsPageManager(ILymphsPageRepository repository, IReportManager reportManager, IReportService reportService,
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }
    }
}
