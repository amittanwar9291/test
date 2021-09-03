using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.ShoulderMRT.Domain.Models;
using RadioReport.ShoulderMRT.Domain.Interfaces;
using System;
using System.Collections.Generic;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Enums.Technology;
using RadioReport.Common.Module.Logic.Interfaces;

namespace RadioReport.ShoulderMRT.Technology.Domain.Managers
{
    public class TechnologyPageManager : PageManagerBase<TechnologyPage, ITechnologyPageRepository>
    {
        public override string PageTypeName => PageTypeNames.ShoulderMrtTechnology;

        protected override List<Type> FindingTypes => new List<Type> { typeof(CMSideEffectType), typeof(WeightingType) };

        public TechnologyPageManager(ITechnologyPageRepository repository, IReportManager reportManager, IReportService reportService,
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }
    }
}
