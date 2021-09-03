using RadioReport.Common.Module.Logic.Managers;
using RadioReport.AngiographyCT.Domain.Interfaces;
using RadioReport.AngiographyCT.Domain.Models;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using System.Collections.Generic;
using System;
using RadioReport.AngiographyCT.Domain.Enums.PelvisLegArteries;

namespace RadioReport.AngiographyCT.Domain.Managers
{
    public class PelvisLegArteriesPageManager : PageManagerBase<PelvisLegArteriesPage, IPelvisLegArteriesPageRepository>
    {
        public override string PageTypeName => PageTypeNames.AngiographyCtPelvisLegArteries;

        protected override List<Type> FindingTypes { get; } = new List<Type>() { typeof(PelvisLegArteriesFindingType) };

        public PelvisLegArteriesPageManager(IPelvisLegArteriesPageRepository repository, IReportManager reportManager, IReportService reportService, 
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository, 
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }
    }
}
