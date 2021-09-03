using RadioReport.AngiographyCT.Domain.Interfaces;
using RadioReport.AngiographyCT.Domain.Models;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Interfaces;
using System;
using System.Collections.Generic;
using RadioReport.AngiographyCT.Domain.Enums;
using RadioReport.AngiographyCT.Domain.Enums.Abdomen;

namespace RadioReport.AngiographyCT.Domain.Managers
{
    public class AbdomenPageManager : PageManagerBase<AbdomenPage, IAbdomenPageRepository>
    {
        public override string PageTypeName => PageTypeNames.AngiographyCtAbdomen;

        public AbdomenPageManager(IAbdomenPageRepository repository, IReportManager reportManager, IReportService reportService,
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }

        protected override List<Type> FindingTypes => new List<Type> { typeof(AbdomenFindingType) };

    }
}
