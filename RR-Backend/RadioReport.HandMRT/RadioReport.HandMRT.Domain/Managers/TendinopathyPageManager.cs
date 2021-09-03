using System;
using System.Collections.Generic;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.HandMRT.Domain.Interfaces;
using RadioReport.HandMRT.Domain.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.HandMRT.Domain.Enums.Tendinopathy;

namespace RadioReport.HandMRT.Domain.Managers
{
    public class TendinopathyPageManager : PageManagerBase<TendinopathyPage, ITendinopathyPageRepository>
    {
        public override string PageTypeName => PageTypeNames.HandMrtTendinopathy;

        protected override List<Type> FindingTypes => new List<Type> { typeof(TendinopathyFindingType) };

        public TendinopathyPageManager(ITendinopathyPageRepository repository, IReportManager reportManager, IReportService reportService,
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }
    }
}
