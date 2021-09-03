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
using RadioReport.NeckMRT.Domain.Enums.Indication;

namespace RadioReport.NeckMRT.Domain.Managers
{
    public class IndicationPageManager : PageManagerBase<IndicationPage, IIndicationPageRepository>
    {
        public override string PageTypeName => PageTypeNames.NeckMrtIndication;
        
        protected override List<Type> FindingTypes => new List<Type> { typeof(IndicationType), typeof(PreviousTherapyType) };
        
        public IndicationPageManager(IIndicationPageRepository repository, IReportManager reportManager, IReportService reportService,
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }
    }
}
