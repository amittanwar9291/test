using RadioReport.AbdomenMRT.Domain.Interfaces;
using RadioReport.AbdomenMRT.Domain.Models;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Enums.Technology;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Managers;
using System;
using System.Collections.Generic;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Models;

namespace RadioReport.AbdomenMRT.Domain.Managers
{
    public class TechnologyPageManager : PageManagerBase<TechnologyPage, ITechnologyPageRepository>
    {
        public override string PageTypeName => PageTypeNames.AbdomenMrtTechnology;

        protected override List<Type> FindingTypes => new List<Type> { typeof(CMSideEffectType), typeof(WeightingType) };
        
        public TechnologyPageManager(ITechnologyPageRepository repository, IReportManager reportManager, IReportService reportService,
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }
    }
}
