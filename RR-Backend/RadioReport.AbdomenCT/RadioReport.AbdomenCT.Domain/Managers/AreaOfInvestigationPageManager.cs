using RadioReport.AbdomenCT.Domain.Interfaces;
using RadioReport.AbdomenCT.Domain.Models;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;

namespace RadioReport.AbdomenCT.Domain.Managers
{
    public class AreaOfInvestigationPageManager : PageManagerBase<AreaOfInvestigationPage, IAreaOfInvestigationPageRepository>
    {
        public override string PageTypeName => PageTypeNames.AbdomenCtAreaOfInvestigation;

        public AreaOfInvestigationPageManager(IAreaOfInvestigationPageRepository repository, IReportManager reportManager, IReportService reportService, 
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository, 
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }
    }
}