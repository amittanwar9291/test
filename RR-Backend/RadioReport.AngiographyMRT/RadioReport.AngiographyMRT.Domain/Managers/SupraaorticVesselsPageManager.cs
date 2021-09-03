using System;
using System.Collections.Generic;
using Microsoft.Extensions.Configuration;
using RadioReport.AngiographyMRT.Domain.Enums.SupraaorticVessels;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.AngiographyMRT.Domain.Interfaces;
using RadioReport.AngiographyMRT.Domain.Models;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;

namespace RadioReport.AngiographyMRT.Domain.Managers
{
    public class SupraaorticVesselsPageManager : PageManagerBase<SupraaorticVesselsPage, ISupraaorticVesselsPageRepository>
    {
        public override string PageTypeName => PageTypeNames.AngiographyMrtSupraaorticVessels;
        protected override List<Type> FindingTypes => new List<Type> { typeof(SupraaorticVesselsFindingType) };

        public SupraaorticVesselsPageManager(ISupraaorticVesselsPageRepository repository, IReportManager reportManager, IReportService reportService, IConfiguration configuration,
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository, kafkaProducer, httpAuthContext, moduleContext)
        {
        }
    }
}
