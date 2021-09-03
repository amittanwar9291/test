using RadioReport.Common.Module.Logic.Managers;
using RadioReport.AngiographyCT.Domain.Interfaces;
using RadioReport.AngiographyCT.Domain.Models;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using System.Collections.Generic;
using System;
using RadioReport.AngiographyCT.Domain.Enums.SupraaorticVessels;

namespace RadioReport.AngiographyCT.Domain.Managers
{
    public class SupraaorticVesselsPageManager : PageManagerBase<SupraaorticVesselsPage, ISupraaorticVesselsPageRepository>
    {
        public override string PageTypeName => PageTypeNames.AngiographyCtSupraaorticVessels;

        protected override List<Type> FindingTypes => new List<Type> { typeof(SupraaorticVesselsFindingType) };

        public SupraaorticVesselsPageManager(ISupraaorticVesselsPageRepository repository, IReportManager reportManager, IReportService reportService, 
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository, 
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }
    }
}
