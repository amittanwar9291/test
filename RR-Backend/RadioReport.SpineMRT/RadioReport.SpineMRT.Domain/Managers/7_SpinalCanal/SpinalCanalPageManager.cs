using System;
using System.Collections.Generic;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.SpineMRT.Domain.Interfaces;
using RadioReport.SpineMRT.Domain.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.SpineMRT.Domain.Enums.SpinalCanal;

namespace RadioReport.SpineMRT.Domain.Managers
{
    public class SpinalCanalPageManager : PageManagerBase<SpinalCanalPage, ISpinalCanalPageRepository>
    {
        public override string PageTypeName => PageTypeNames.SpineMrtSpinalCanal;

        protected override List<Type> FindingTypes => new List<Type> { typeof(SpinalCanalFindingType) };

        public SpinalCanalPageManager(ISpinalCanalPageRepository repository, IReportManager reportManager, IReportService reportService,
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }
    }
}
