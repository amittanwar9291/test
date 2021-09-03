using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.ShoulderMRT.Domain.Models;
using RadioReport.ShoulderMRT.Domain.Interfaces;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Interfaces;

namespace RadioReport.ShoulderMRT.Localization.Domain.Managers
{
    public class LocalizationPageManager : PageManagerBase<LocalizationPage, ILocalizationPageRepository>
    {
        public override string PageTypeName => PageTypeNames.ShoulderMrtLocalization;

        public LocalizationPageManager(ILocalizationPageRepository repository, IReportManager reportManager, IReportService reportService,
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }
    }
}
