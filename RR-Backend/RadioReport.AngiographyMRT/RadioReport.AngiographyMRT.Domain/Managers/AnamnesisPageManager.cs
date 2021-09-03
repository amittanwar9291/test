using RadioReport.AngiographyMRT.Domain.Enums.Anamnesis;
using RadioReport.AngiographyMRT.Domain.Interfaces;
using RadioReport.AngiographyMRT.Domain.Models;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Managers;
using System;
using System.Collections.Generic;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Models;

namespace RadioReport.AngiographyMRT.Domain.Managers
{
    public class AnamnesisPageManager : PageManagerBase<AnamnesisPage, IAnamnesisPageRepository>
    {
        public override string PageTypeName => PageTypeNames.AngiographyMrtAnamnesis;
        protected override List<Type> FindingTypes => new List<Type> { typeof(AnamnesisFindingType) };

        public AnamnesisPageManager(IAnamnesisPageRepository repository, IReportManager reportManager, IReportService reportService,
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }
    }
}
