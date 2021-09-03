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
    public class PatientIndicationPageManager : PageManagerBase<PatientIndicationPage, IPatientIndicationPageRepository>
    {
        public override string PageTypeName => PageTypeNames.MammaMxPatientIndication;

        protected override List<Type> FindingTypes => new List<Type>() { typeof(PatientIndicationFindingType) };

        public PatientIndicationPageManager(IPatientIndicationPageRepository repository, IReportManager reportManager, IReportService reportService,
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }
    }
}
