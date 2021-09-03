using System;
using System.Collections.Generic;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.FeetMRT.Domain.Enums.SoftTissue;
using RadioReport.FeetMRT.Domain.Interfaces;
using RadioReport.FeetMRT.Domain.Models;

namespace RadioReport.FeetMRT.Domain.Managers
{
    public class SoftTissuePageManager : PageManagerBase<SoftTissuePage, ISoftTissuePageRepository>
    {
        public override string PageTypeName => PageTypeNames.FeetMrtSoftTissue;

        protected override List<Type> FindingTypes => new List<Type> { typeof(SoftTissueFindingType) };

        public SoftTissuePageManager(ISoftTissuePageRepository repository, IReportManager reportManager, IReportService reportService,
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }
    }
}
