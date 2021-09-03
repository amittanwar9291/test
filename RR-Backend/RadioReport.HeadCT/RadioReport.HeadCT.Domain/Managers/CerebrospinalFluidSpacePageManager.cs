using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.HeadCT.Domain.Enums.CerebrospinalFluidSpace;
using RadioReport.HeadCT.Domain.Interfaces;
using RadioReport.HeadCT.Domain.Models;
using System;
using System.Collections.Generic;

namespace RadioReport.HeadCT.Domain.Managers
{
    public class CerebrospinalFluidSpacePageManager: PageWithImageManagerBase<CerebrospinalFluidSpacePage, ICerebrospinalFluidSpacePageRepository>
    {
        public override string PageTypeName => PageTypeNames.HeadCtCerebrospinalFluidSpace;

        protected override List<Type> FindingTypes => new List<Type>() { typeof(CerebrospinalFluidSpaceFindingType) };

        public CerebrospinalFluidSpacePageManager(ICerebrospinalFluidSpacePageRepository repository, IReportManager reportManager, IReportService reportService,
           IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
           kafkaProducer, httpAuthContext, moduleContext)
        {
        }

        protected override string[] GetIncludes() =>
            new[]
            {
                nameof(CerebrospinalFluidSpacePage.Findings),
                nameof(CerebrospinalFluidSpacePage.Findings) + "." + nameof(CerebrospinalFluidSpaceFinding.ImageFile)
            };
    }
}
