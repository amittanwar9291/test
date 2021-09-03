using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.MammaMX.Domain.Interfaces;
using RadioReport.MammaMX.Domain.Models;

namespace RadioReport.MammaMX.Domain.Managers
{
    public class MammographyParenchymaAnatomyPageManager : PageManagerBase<MammographyParenchymaAnatomyPage, IMammographyParenchymaAnatomyPageRepository>
    {
        public override string PageTypeName => PageTypeNames.MammaMxMammographyParenchymaAnatomy;

        public MammographyParenchymaAnatomyPageManager(IMammographyParenchymaAnatomyPageRepository repository, IReportManager reportManager,
            IReportService reportService,
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }
    }
}
