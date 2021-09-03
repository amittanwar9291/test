using System;
using System.Collections.Generic;
using RadioReport.CardioMRT.Domain.Enums.PericardiumVessels;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.CardioMRT.Domain.Interfaces;
using RadioReport.CardioMRT.Domain.Models;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;

namespace RadioReport.CardioMRT.Domain.Managers
{
    public class PericardiumVesselsPageManager : PageManagerBase<PericardiumVesselsPage, IPericardiumVesselsPageRepository>
    {
        public override string PageTypeName => PageTypeNames.CardioMrtPericardiumVessels;

        protected override List<Type> FindingTypes => new List<Type> { typeof(PericardiumVesselsFindingType) };

        public PericardiumVesselsPageManager(IPericardiumVesselsPageRepository repository,
            IReportManager reportManager, IReportService reportService, IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) :
            base(reportManager, reportService, repository, kafkaProducer, httpAuthContext, moduleContext)
        {
        }
    }
}
