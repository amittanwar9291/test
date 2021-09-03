using System;
using System.Collections.Generic;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.ElbowMRT.Domain.Interfaces;
using RadioReport.ElbowMRT.Domain.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.ElbowMRT.Domain.Enums.Bones;

namespace RadioReport.ElbowMRT.Domain.Managers
{
    public class BonesPageManager : PageManagerBase<BonesPage, IBonesPageRepository>
    {
        public override string PageTypeName => PageTypeNames.ElbowMrtBones;

        protected override List<Type> FindingTypes => new List<Type> { typeof(BonesFindingType) };

        public BonesPageManager(IBonesPageRepository repository, IReportManager reportManager, IReportService reportService,
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }
    }
}
