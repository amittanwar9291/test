using System;
using System.Collections.Generic;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.HipMRT.Domain.Interfaces;
using RadioReport.HipMRT.Domain.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.HipMRT.Domain.Enums;

namespace RadioReport.HipMRT.Domain.Managers
{
    public class MusclesAndTendonsPageManager : PageManagerBase<MusclesAndTendonsPage, IMusclesAndTendonsPageRepository>
    {
        public override string PageTypeName => PageTypeNames.HipMrtMusclesAndTendons;

        protected override List<Type> FindingTypes => new List<Type> { typeof(MusclesAndTendonsFindingType) };

        public MusclesAndTendonsPageManager(IMusclesAndTendonsPageRepository repository,
            IReportManager reportManager, IReportService reportService, IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) :
            base(reportManager, reportService, repository, kafkaProducer, httpAuthContext, moduleContext)
        {
        }
    }
}
