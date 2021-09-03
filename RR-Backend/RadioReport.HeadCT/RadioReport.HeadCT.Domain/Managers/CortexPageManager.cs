using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.HeadCT.Domain.Enums.Cortex;
using RadioReport.HeadCT.Domain.Interfaces;
using RadioReport.HeadCT.Domain.Models;
using System;
using System.Collections.Generic;

namespace RadioReport.HeadCT.Domain.Managers
{
    public class CortexPageManager: PageManagerBase<CortexPage, ICortexPageRepository>
    {
        public override string PageTypeName => PageTypeNames.HeadCtCortex;

        protected override List<Type> FindingTypes { get; } = new List<Type>() { typeof(CortexFindingType) };

        public CortexPageManager(ICortexPageRepository repository, IReportManager reportManager, IReportService reportService,
           IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
           kafkaProducer, httpAuthContext, moduleContext)
        {
        }
    }
}
