using System;
using System.Collections.Generic;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.FeetMRT.Domain.Enums.LigamentsAndTendons;
using RadioReport.FeetMRT.Domain.Interfaces;
using RadioReport.FeetMRT.Domain.Models;

namespace RadioReport.FeetMRT.Domain.Managers
{
    public class LigamentsAndTendonsPageManager : PageManagerBase<LigamentsAndTendonsPage, ILigamentsAndTendonsPageRepository>
    {
        public override string PageTypeName => PageTypeNames.FeetMrtLigamentsAndTendons;

        protected override List<Type> FindingTypes => new List<Type> { typeof(LigamentsAndTendonsFindingType) };

        public LigamentsAndTendonsPageManager(ILigamentsAndTendonsPageRepository repository, IReportManager reportManager, IReportService reportService,
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }
    }
}
