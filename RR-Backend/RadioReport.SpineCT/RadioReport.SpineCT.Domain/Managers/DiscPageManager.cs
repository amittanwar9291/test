using RadioReport.Common.Module.Logic.Managers;
using RadioReport.SpineCT.Domain.Interfaces;
using RadioReport.SpineCT.Domain.Models;
using System;
using System.Collections.Generic;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.SpineCT.Domain.Enums.Disc;

namespace RadioReport.SpineCT.Domain.Managers
{
    public class DiscPageManager : PageManagerBase<DiscPage, IDiscPageRepository>
    {
        public override string PageTypeName => PageTypeNames.SpineCtDisc;

        protected override List<Type> FindingTypes => new List<Type> { typeof(DiscFindingType) };

        public DiscPageManager(IDiscPageRepository repository, IReportManager reportManager, IReportService reportService,
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }
    }
}
