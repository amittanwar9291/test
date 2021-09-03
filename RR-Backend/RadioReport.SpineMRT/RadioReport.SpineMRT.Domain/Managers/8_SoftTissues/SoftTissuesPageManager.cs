using System;
using System.Collections.Generic;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.SpineMRT.Domain.Interfaces;
using RadioReport.SpineMRT.Domain.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.SpineMRT.Domain.Enums;

namespace RadioReport.SpineMRT.Domain.Managers
{
    public class SoftTissuesPageManager : PageManagerBase<SoftTissuesPage, ISoftTissuesPageRepository>
    {
        public override string PageTypeName => PageTypeNames.SpineMrtSoftTissues;

        protected override List<Type> FindingTypes => new List<Type> { typeof(SoftTissuesFindingType) };

        public SoftTissuesPageManager(ISoftTissuesPageRepository repository, IReportManager reportManager, IReportService reportService,
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }
    }
}
