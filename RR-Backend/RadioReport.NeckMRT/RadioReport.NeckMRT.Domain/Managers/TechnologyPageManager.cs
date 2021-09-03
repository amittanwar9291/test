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
using RadioReport.NeckMRT.Domain.Enums.Technology;
using RadioReport.Common.Module.Logic.Enums.Technology;

namespace RadioReport.NeckMRT.Domain.Managers
{
    public class TechnologyPageManager : PageManagerBase<TechnologyPage, ITechnologyPageRepository>
    {
        public override string PageTypeName => PageTypeNames.NeckMrtTechnology;

        protected override List<Type> FindingTypes => new List<Type> { typeof(CMSideEffectType), typeof(SequenceType) };
        
        public TechnologyPageManager(ITechnologyPageRepository repository, IReportManager reportManager, IReportService reportService,
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }
    }
}
