using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.NeckMRT.Domain.Interfaces;
using RadioReport.NeckMRT.Domain.Models;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Models;
using System.Collections.Generic;
using System;
using RadioReport.NeckMRT.Domain.Enums.Vessels;

namespace RadioReport.NeckMRT.Domain.Managers
{
    public class VesselsPageManager : PageManagerBase<VesselsPage, IVesselsPageRepository>
    {
        public override string PageTypeName => PageTypeNames.NeckMrtVessels;
        
        protected override List<Type> FindingTypes => new List<Type> { typeof(VesselsFindingType) };
        
        public VesselsPageManager(IVesselsPageRepository repository, IReportManager reportManager, IReportService reportService,
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }
    }
}
