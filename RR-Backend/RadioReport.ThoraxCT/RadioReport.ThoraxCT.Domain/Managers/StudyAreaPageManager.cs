using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.ThoraxCT.Domain.Interfaces;
using RadioReport.ThoraxCT.Domain.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;

namespace RadioReport.ThoraxCT.Domain.Managers
{
    public class StudyAreaPageManager : PageManagerBase<StudyAreaPage, IStudyAreaPageRepository>
    {
        public override string PageTypeName => PageTypeNames.ThoraxCtStudyArea;
        public StudyAreaPageManager(IStudyAreaPageRepository repository, IReportManager reportManager, IReportService reportService,
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }
    }
}
