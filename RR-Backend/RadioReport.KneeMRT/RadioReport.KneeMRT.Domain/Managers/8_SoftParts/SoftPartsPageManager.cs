using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.KneeMRT.Domain.Enums;
using RadioReport.KneeMRT.Domain.Interfaces;
using RadioReport.KneeMRT.Domain.Models;
using System;
using System.Collections.Generic;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Interfaces;

namespace RadioReport.KneeMRT.Domain.Managers
{
    public class SoftPartsPageManager : PageManagerBase<SoftPartsPage, ISoftPartsPageRepository>
    {
        public override string PageTypeName => PageTypeNames.KneeMrtSoftParts;
        protected override List<Type> FindingTypes => new List<Type>() { typeof(SoftPartsFindingType) };

        public SoftPartsPageManager(ISoftPartsPageRepository repository, IReportManager reportManager, IReportService reportService,
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }
    }
}
