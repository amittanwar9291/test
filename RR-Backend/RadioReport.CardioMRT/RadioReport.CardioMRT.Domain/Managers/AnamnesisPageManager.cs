using RadioReport.Common.Module.Logic.Managers;
using RadioReport.CardioMRT.Domain.Interfaces;
using RadioReport.CardioMRT.Domain.Models;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using System.Collections.Generic;
using System;
using RadioReport.CardioMRT.Domain.Enums.Anamnesis;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Models;

namespace RadioReport.CardioMRT.Domain.Managers
{
    public class AnamnesisPageManager : PageManagerBase<AnamnesisPage, IAnamnesisPageRepository>
    {
        public override string PageTypeName => PageTypeNames.CardioMrtAnamnesis;

        protected override List<Type> FindingTypes => new List<Type> { typeof(IndicationFindingType), typeof(InterventionOrPreOpsFindingType) };

        public AnamnesisPageManager(IAnamnesisPageRepository repository, IReportManager reportManager, IReportService reportService,
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }      
    }
}
