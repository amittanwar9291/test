using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.HeadCT.Domain.Enums.BasalNuclei;
using RadioReport.HeadCT.Domain.Interfaces;
using RadioReport.HeadCT.Domain.Models;
using System;
using System.Collections.Generic;

namespace RadioReport.HeadCT.Domain.Managers
{
    public class BasalNucleiPageManager: PageManagerBase<BasalNucleiPage, IBasalNucleiPageRepository>
    {
        public override string PageTypeName => PageTypeNames.HeadCtBasalNuclei;

        protected override List<Type> FindingTypes => new List<Type> { typeof(BasalNucleiFindingType) };

        public BasalNucleiPageManager(IBasalNucleiPageRepository repository, IReportManager reportManager, IReportService reportService,
           IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
           kafkaProducer, httpAuthContext, moduleContext)
        {
        }
    }
}
