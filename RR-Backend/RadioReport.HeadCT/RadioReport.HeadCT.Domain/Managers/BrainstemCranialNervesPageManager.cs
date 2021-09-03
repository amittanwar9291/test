using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.HeadCT.Domain.Enums.BrainstemCranialNerves;
using RadioReport.HeadCT.Domain.Interfaces;
using RadioReport.HeadCT.Domain.Models;
using System;
using System.Collections.Generic;

namespace RadioReport.HeadCT.Domain.Managers
{
    public class BrainstemCranialNervesPageManager: PageManagerBase<BrainstemCranialNervesPage, IBrainstemCranialNervesPageRepository>
    {
        public override string PageTypeName => PageTypeNames.HeadCtBrainstemCranialNerves;

        protected override List<Type> FindingTypes { get; } = new List<Type>() { typeof(BrainstemCranialNervesFindingType) };

        public BrainstemCranialNervesPageManager(IBrainstemCranialNervesPageRepository repository, IReportManager reportManager, IReportService reportService,
           IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
           kafkaProducer, httpAuthContext, moduleContext)
        {
        }
    }
}
