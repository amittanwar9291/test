using System;
using System.Collections.Generic;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.ThoraxCT.Domain.Interfaces;
using RadioReport.ThoraxCT.Domain.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.ThoraxCT.Domain.Enums;

namespace RadioReport.ThoraxCT.Domain.Managers
{
    public class AnamnesisPageManager : PageManagerBase<AnamnesisPage, IAnamnesisPageRepository>
    {
        public override string PageTypeName => PageTypeNames.ThoraxCtAnamnesis;

        protected override List<Type> FindingTypes => new List<Type> { typeof(AnamnesisFindingType) };

        public AnamnesisPageManager(IAnamnesisPageRepository repository, IReportManager reportManager, IReportService reportService,
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }
    }
}
