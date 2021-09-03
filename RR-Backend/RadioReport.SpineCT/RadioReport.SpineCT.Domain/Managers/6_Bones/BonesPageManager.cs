using System;
using System.Collections.Generic;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.SpineCT.Domain.Enums.Bones;
using RadioReport.SpineCT.Domain.Interfaces;
using RadioReport.SpineCT.Domain.Models;

namespace RadioReport.SpineCT.Domain.Managers
{
    public class BonesPageManager : PageManagerBase<BonesPage, IBonesPageRepository>
    {
        public override string PageTypeName => PageTypeNames.SpineCtBones;

        protected override List<Type> FindingTypes => new List<Type> { typeof(BonesFindingType) };

        public BonesPageManager(IBonesPageRepository repository, IReportManager reportManager, IReportService reportService,
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }
    }
}
