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
    public class LeftVentriclePageManager : PageWithImageManagerBase<LeftVentriclePage, ILeftVentriclePageRepository>
    {
        public override string PageTypeName => PageTypeNames.CardioMrtLeftVentricle;
        public LeftVentriclePageManager(ILeftVentriclePageRepository repository, IReportManager reportManager, IReportService reportService,
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }

        protected override string[] GetIncludes()
        {
            return new[]
            {
                nameof(LeftVentriclePage.KineticDisorderLocalizer),
                nameof(LeftVentriclePage.PerfusionDefectLocalizer),
                nameof(LeftVentriclePage.LGESegmentalLocalizer),
                nameof(LeftVentriclePage.T1Localizer),
                nameof(LeftVentriclePage.T2Localizer),
                nameof(LeftVentriclePage.T1GdLocalizer),
                nameof(LeftVentriclePage.LGEImageFile),
                nameof(LeftVentriclePage.T1ImageFile),
                nameof(LeftVentriclePage.T2ImageFile),
                nameof(LeftVentriclePage.T1GdImageFile)
            };
        }

    }
}
