using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.FeetMRT.Domain.Interfaces;
using RadioReport.FeetMRT.Domain.Models;

namespace RadioReport.FeetMRT.Domain.Managers
{
    public class LocalizationPageManager : PageManagerBase<LocalizationPage, ILocalizationPageRepository>
    {
        public override string PageTypeName => PageTypeNames.FeetMrtLocalization;

        public LocalizationPageManager(ILocalizationPageRepository repository, IReportManager reportManager, IReportService reportService,
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }
    }
}
