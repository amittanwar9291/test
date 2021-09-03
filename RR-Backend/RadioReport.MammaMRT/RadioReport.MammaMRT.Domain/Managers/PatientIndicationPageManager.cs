using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.MammaMRT.Domain.Enums;
using RadioReport.MammaMRT.Domain.Interfaces;
using RadioReport.MammaMRT.Domain.Models;
using System;
using System.Collections.Generic;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Interfaces;

namespace RadioReport.MammaMRT.Domain.Managers
{
    public class PatientIndicationPageManager : PageManagerBase<PatientIndicationPage, IPatientIndicationPageRepository>
    {
        public override string PageTypeName => PageTypeNames.MammaMrtPatientIndication;
        protected override List<Type> FindingTypes => new List<Type>() { typeof(PatientIndicationFindingType) };

        public PatientIndicationPageManager(IPatientIndicationPageRepository repository, IReportManager reportManager, IReportService reportService,
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }
    }
}
