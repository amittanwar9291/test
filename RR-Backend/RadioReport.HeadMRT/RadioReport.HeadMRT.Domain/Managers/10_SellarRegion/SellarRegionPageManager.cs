using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.HeadMRT.Domain.Enums.SellarRegion;
using RadioReport.HeadMRT.Domain.Interfaces;
using RadioReport.HeadMRT.Domain.Models;
using System;
using System.Collections.Generic;

namespace RadioReport.HeadMRT.Domain.Managers
{
    public class SellarRegionPageManager: PageManagerBase<SellarRegionPage, ISellarRegionPageRepository>
    {
        public override string PageTypeName => PageTypeNames.HeadMrtSellarRegion;

        protected override List<Type> FindingTypes => new List<Type>() { typeof(SellarRegionFindingType) };

        public SellarRegionPageManager(ISellarRegionPageRepository repository, IReportManager reportManager, IReportService reportService,
           IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
           kafkaProducer, httpAuthContext, moduleContext)
        {
        }
    }
}
