using System;
using System.Collections.Generic;
using RadioReport.AbdomenCT.Domain.Enums.MedicalHistory;
using RadioReport.AbdomenCT.Domain.Interfaces;
using RadioReport.AbdomenCT.Domain.Models;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;

namespace RadioReport.AbdomenCT.Domain.Managers
{
    public class MedicalHistoryPageManager : PageManagerBase<MedicalHistoryPage, IMedicalHistoryPageRepository>
    {
        public override string PageTypeName => PageTypeNames.AbdomenCtMedicalHistory;
        
        protected override List<Type> FindingTypes => new List<Type> { typeof(MedicalHistoryClinicType), typeof(MedicalHistoryIndicationType) };

        public MedicalHistoryPageManager(IMedicalHistoryPageRepository repository, IReportManager reportManager, IReportService reportService, 
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository, 
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }
    }
}