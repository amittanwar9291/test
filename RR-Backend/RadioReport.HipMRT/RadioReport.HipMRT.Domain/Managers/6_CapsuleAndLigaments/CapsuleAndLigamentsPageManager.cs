using System;
using System.Collections.Generic;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.HipMRT.Domain.Interfaces;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.HipMRT.Domain.Enums;
using RadioReport.Common.Models;
using RadioReport.HipMRT.Domain.Models.CapsuleAndLigaments;

namespace RadioReport.HipMRT.Domain.Managers
{
    public class CapsuleAndLigamentsPageManager : PageManagerBase<CapsuleAndLigamentsPage, ICapsuleAndLigamentsPageRepository>
    {
        public override string PageTypeName => PageTypeNames.HipMrtCapsuleAndLigaments;

        protected override List<Type> FindingTypes => new List<Type> { typeof(CapsuleAndLigamentsFindingType) };

        public CapsuleAndLigamentsPageManager(ICapsuleAndLigamentsPageRepository repository, IReportManager reportManager, IReportService reportService,
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }
    }
}
