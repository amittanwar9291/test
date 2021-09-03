using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.HeadCT.Domain.Interfaces;
using RadioReport.HeadCT.Domain.Models;

namespace RadioReport.HeadCT.Domain.Managers
{
    public class FacialSkullPageManager : PageManagerBase<FacialSkullPage, IFacialSkullPageRepository>
    {
        public override string PageTypeName => PageTypeNames.HeadCtFacialSkull;

        public FacialSkullPageManager(IFacialSkullPageRepository repository, IReportManager reportManager, IReportService reportService,
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }
    }
}
