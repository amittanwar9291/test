using RadioReport.AngiographyMRT.Domain.Enums.Aorta;
using RadioReport.AngiographyMRT.Domain.Interfaces;
using RadioReport.AngiographyMRT.Domain.Models;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Managers;
using System;
using System.Collections.Generic;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Interfaces;

namespace RadioReport.AngiographyMRT.Domain.Managers
{
    public class AortaPageManager : PageManagerBase<AortaPage, IAortaPageRepository>
    {
        public override string PageTypeName => PageTypeNames.AngiographyMrtAorta;
        protected override List<Type> FindingTypes => new List<Type> { typeof(AortaFindingType) };

        public AortaPageManager(IAortaPageRepository repository, IReportManager reportManager, IReportService reportService,
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }
    }
}
