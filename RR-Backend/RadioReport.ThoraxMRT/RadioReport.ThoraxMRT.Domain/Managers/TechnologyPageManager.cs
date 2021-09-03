using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.ThoraxMRT.Domain.Interfaces;
using RadioReport.ThoraxMRT.Domain.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Models;
using System.Collections.Generic;
using System;
using RadioReport.Common.Module.Logic.Enums.Technology;

namespace RadioReport.ThoraxMRT.Domain.Managers
{
    public class TechnologyPageManager : PageManagerBase<TechnologyPage, ITechnologyPageRepository>
    {
        public override string PageTypeName => PageTypeNames.ThoraxMrtTechnology;

        protected override List<Type> FindingTypes => new List<Type> { typeof(CMSideEffectType), typeof(WeightingType) };

        public TechnologyPageManager(ITechnologyPageRepository repository, IReportManager reportManager, IReportService reportService,
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }
    }
}
