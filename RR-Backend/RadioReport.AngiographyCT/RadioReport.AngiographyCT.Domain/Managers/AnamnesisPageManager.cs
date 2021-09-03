using System;
using System.Collections.Generic;
using RadioReport.AngiographyCT.Domain.Enums;
using RadioReport.AngiographyCT.Domain.Interfaces;
using RadioReport.AngiographyCT.Domain.Models;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Models;

namespace RadioReport.AngiographyCT.Domain.Managers
{
    public class AnamnesisPageManager : PageManagerBase<AnamnesisPage, IAnamnesisPageRepository>
    {
        public override string PageTypeName => PageTypeNames.AngiographyCtAnamnesis;

        protected override List<Type> FindingTypes => new List<Type> { typeof(PriorInterventionsFindingType), typeof(IndicationFindingType) };
        
        public AnamnesisPageManager(IAnamnesisPageRepository repository, IReportManager reportManager, IReportService reportService,
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }
    }
}
