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
using RadioReport.AbdomenMRT.Domain.Enums.PeritonealCavity;

namespace RadioReport.AbdomenMRT.Domain.Managers
{
    public class PeritonealCavityPageManager : PageWithImageManagerBase<PeritonealCavityPage, IPeritonealCavityPageRepository>
    {
        public override string PageTypeName => PageTypeNames.AbdomenMrtPeritonealCavity;

        protected override List<Type> FindingTypes => new List<Type> { typeof(PeritonealCavityFindingType) };

        public PeritonealCavityPageManager(IPeritonealCavityPageRepository repository, IReportManager reportManager, IReportService reportService, 
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository, 
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }
        
        protected override string[] GetIncludes() =>
            new[]
            {
                nameof(PeritonealCavityPage.Findings),
                nameof(PeritonealCavityPage.Findings) + "." + nameof(PeritonealCavityFinding.UploadedImageFile)
            };
    }
}
