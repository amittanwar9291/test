using RadioReport.Common.Module.Logic.Managers;
using RadioReport.AbdomenMRT.Domain.Interfaces;
using RadioReport.AbdomenMRT.Domain.Models;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using System.Collections.Generic;
using System;
using RadioReport.AbdomenMRT.Domain.Enums.Kidneys;

namespace RadioReport.AbdomenMRT.Domain.Managers
{
    public class KidneysPageManager : PageWithImageManagerBase<KidneysPage, IKidneysPageRepository>
    {
        public override string PageTypeName => PageTypeNames.AbdomenMrtKidneys;

        protected override List<Type> FindingTypes => new List<Type> { typeof(KidneysFindingType) };

        public KidneysPageManager(IKidneysPageRepository repository, IReportManager reportManager, IReportService reportService, 
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository, 
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }
        
        protected override string[] GetIncludes() =>
            new[]
            {
                nameof(KidneysPage.Findings),
                nameof(KidneysPage.Findings) + "." + nameof(KidneysFinding.NormVariantOrAnomalyImageFile),
                nameof(KidneysPage.Findings) + "." + nameof(KidneysFinding.ObstructiveNephropathyChar1ImageFile),
                nameof(KidneysPage.Findings) + "." + nameof(KidneysFinding.ObstructiveNephropathyChar2ImageFile),
                nameof(KidneysPage.Findings) + "." + nameof(KidneysFinding.MassImageFile),
                nameof(KidneysPage.Findings) + "." + nameof(KidneysFinding.DecreasedRenalVolumeImageFile),
                nameof(KidneysPage.Findings) + "." + nameof(KidneysFinding.IncreasedRenalVolumeImageFile),
                nameof(KidneysPage.Findings) + "." + nameof(KidneysFinding.VascularNephropathyImageFile)
            };
    }
}
