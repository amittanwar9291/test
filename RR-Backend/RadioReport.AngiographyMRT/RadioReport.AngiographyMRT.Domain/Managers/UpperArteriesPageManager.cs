using System;
using System.Collections.Generic;
using RadioReport.AngiographyMRT.Domain.Enums.UpperArteries;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.AngiographyMRT.Domain.Interfaces;
using RadioReport.AngiographyMRT.Domain.Models;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;

namespace RadioReport.AngiographyMRT.Domain.Managers
{
    public class UpperArteriesPageManager : PageManagerBase<UpperArteriesPage, IUpperArteriesPageRepository>
    {
        public override string PageTypeName => PageTypeNames.AngiographyMrtUpperArteries;
        protected override List<Type> FindingTypes => new List<Type> { typeof(UpperArteriesFindingType) };

        public UpperArteriesPageManager(IUpperArteriesPageRepository repository, IReportManager reportManager, IReportService reportService, IKafkaProducer kafkaProducer,
            HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository, kafkaProducer, httpAuthContext, moduleContext)
        {
        }
    }
}
