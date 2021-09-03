using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.ThoraxMRT.Domain.Interfaces;
using RadioReport.ThoraxMRT.Domain.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using System.Collections.Generic;
using System;
using RadioReport.ThoraxMRT.Domain.Enums;

namespace RadioReport.ThoraxMRT.Domain.Managers
{
    public class AnamnesisPageManager : PageManagerBase<AnamnesisPage, IAnamnesisPageRepository>
    {
        public override string PageTypeName => PageTypeNames.ThoraxMrtAnamnesis;

        protected override List<Type> FindingTypes => new List<Type> { typeof(AnamnesisFindingType), typeof(IndicationType) };

        public AnamnesisPageManager(IAnamnesisPageRepository repository, IReportManager reportManager, IReportService reportService,
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }
    }
}
