using RadioReport.AngiographyCT.Domain.Interfaces;
using RadioReport.AngiographyCT.Domain.Models;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Interfaces;
using System.Collections.Generic;
using System;
using RadioReport.AngiographyCT.Domain.Enums.Aorta;

namespace RadioReport.AngiographyCT.Domain.Managers
{
    public class AortaPageManager : PageManagerBase<AortaPage, IAortaPageRepository>
    {
        public override string PageTypeName => PageTypeNames.AngiographyCtAorta;

        protected override List<Type> FindingTypes => new List<Type> { typeof(AortaFindingType) };

        public AortaPageManager(IAortaPageRepository repository, IReportManager reportManager, IReportService reportService,
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }
    }
}
