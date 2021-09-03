using RadioReport.Common.Module.Logic.Managers;
using RadioReport.AbdomenMRT.Domain.Interfaces;
using RadioReport.AbdomenMRT.Domain.Models;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;

namespace RadioReport.AbdomenMRT.Domain.Managers
{
    public class ExaminationRegionPageManager : PageManagerBase<ExaminationRegionPage, IExaminationRegionPageRepository>
    {
        public override string PageTypeName => PageTypeNames.AbdomenMrtExaminationRegion;

        public ExaminationRegionPageManager(IExaminationRegionPageRepository repository, IReportManager reportManager, IReportService reportService, 
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository, 
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }
    }
}
