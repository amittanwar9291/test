using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.HeadMRT.Domain.Enums.CerebrospinalFluidSpace;
using RadioReport.HeadMRT.Domain.Interfaces;
using RadioReport.HeadMRT.Domain.Models;
using System;
using System.Collections.Generic;

namespace RadioReport.HeadMRT.Domain.Managers
{
    public class CerebrospinalFluidSpacePageManager: PageManagerBase<CerebrospinalFluidSpacePage, ICerebrospinalFluidSpacePageRepository>
    {
        public override string PageTypeName => PageTypeNames.HeadMrtCerebrospinalFluidSpace;

        protected override List<Type> FindingTypes => new List<Type>() { typeof(CerebrospinalFluidSpaceFindingType) };

        public CerebrospinalFluidSpacePageManager(ICerebrospinalFluidSpacePageRepository repository, IReportManager reportManager, IReportService reportService,
           IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
           kafkaProducer, httpAuthContext, moduleContext)
        {
        }
    }
}
