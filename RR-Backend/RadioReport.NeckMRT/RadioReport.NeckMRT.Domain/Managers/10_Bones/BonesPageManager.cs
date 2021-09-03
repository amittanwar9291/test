using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.NeckMRT.Domain.Models;
using RadioReport.NeckMRT.Domain.Interfaces;
using System.Collections.Generic;
using System;
using RadioReport.NeckMRT.Domain.Enums.Bones;

namespace RadioReport.NeckMRT.Domain.Managers
{
    public class BonesPageManager : PageManagerBase<BonesPage, IBonesPageRepository>
    {
        public override string PageTypeName => PageTypeNames.NeckMrtBones;

        protected override List<Type> FindingTypes => new List<Type> { typeof(BonesFindingType) };
        
        public BonesPageManager(IBonesPageRepository repository, IReportManager reportManager, IReportService reportService,
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }
    }
}
