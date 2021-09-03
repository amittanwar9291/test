using System;
using System.Collections.Generic;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.PelvisMRT.Domain.Enums.PelvicFloor;
using RadioReport.PelvisMRT.Domain.Interfaces;
using RadioReport.PelvisMRT.Domain.Models;

namespace RadioReport.PelvisMRT.Domain.Managers
{
    public class PelvicFloorPageManager : PageManagerBase<PelvicFloorPage, IPelvicFloorPageRepository>
    {
        public override string PageTypeName => PageTypeNames.PelvisMrtPelvicFloor;

        protected override List<Type> FindingTypes => new List<Type> { typeof(PelvicFloorFindingType) };

        public PelvicFloorPageManager(IPelvicFloorPageRepository repository, IReportManager reportManager, IReportService reportService,
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }
    }
}
