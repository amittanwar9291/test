using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.SpineMRT.Domain.Interfaces;
using RadioReport.SpineMRT.Domain.Models;
using RadioReport.Common.Module.Logic.Consts;
using System;
using System.Collections.Generic;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.SpineMRT.Domain.Enums.Disc;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Models;

namespace RadioReport.SpineMRT.Domain.Managers
{
    public class DiscPageManager : PageWithImageManagerBase<DiscPage, IDiscPageRepository>
    {
        public override string PageTypeName => PageTypeNames.SpineMrtDisc;

        protected override List<Type> FindingTypes => new List<Type> { typeof(DiscFindingType) };

        public DiscPageManager(IDiscPageRepository repository, IReportManager reportManager, IReportService reportService,
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }

        protected override string[] GetIncludes() =>
            new[]
            {
                nameof(DiscPage.Findings),
                nameof(DiscPage.Findings) + "." + nameof(DiscFinding.AnteriorImageFile),
                nameof(DiscPage.Findings) + "." + nameof(DiscFinding.PosteriorImageFile),
                nameof(DiscPage.Findings) + "." + nameof(DiscFinding.MarginalisImageFile),
                nameof(DiscPage.Findings) + "." + nameof(DiscFinding.DiscitisImageFile),
                nameof(DiscPage.Findings) + "." + nameof(DiscFinding.PeriostitisImageFile),
            };
    }
}
