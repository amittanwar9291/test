using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.MammaMX.Domain.Enums;
using RadioReport.MammaMX.Domain.Interfaces;
using RadioReport.MammaMX.Domain.Models;
using System;
using System.Collections.Generic;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Models;

namespace RadioReport.MammaMX.Domain.Managers
{
    public class MedicalHistoryPageManager : PageManagerBase<MedicalHistoryPage, IMedicalHistoryPageRepository>
    {
        public override string PageTypeName => PageTypeNames.MammaMxMedicalHistory;

        protected override List<Type> FindingTypes => new List<Type>() { typeof(OwnFamilyAnamnesisType), typeof(TheraphyType) };

        public MedicalHistoryPageManager(IMedicalHistoryPageRepository repository, IReportManager reportManager, IReportService reportService,
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }
    }
}
