using RadioReport.Common.Module.Logic.Managers;
using RadioReport.CardioMRT.Domain.Interfaces;
using RadioReport.CardioMRT.Domain.Models;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;

namespace RadioReport.CardioMRT.Domain.Managers
{
    public class FindingsVentriclesPageManager : PageWithImageManagerBase<FindingsVentriclesPage, IFindingsVentriclesPageRepository>
    {
        public override string PageTypeName => PageTypeNames.CardioMrtFindingsVentricles;
        public FindingsVentriclesPageManager(IFindingsVentriclesPageRepository repository,
            IReportManager reportManager, IReportService reportService, IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) :
            base(reportManager, reportService, repository, kafkaProducer, httpAuthContext, moduleContext)
        {
        }

        protected override string[] GetIncludes() =>
            new[]
            {
                nameof(FindingsVentriclesPage.MyocardialStrainImage),
                nameof(FindingsVentriclesPage.UploadedImageFile)
            };
    }
}
