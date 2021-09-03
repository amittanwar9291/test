using System;
using System.Collections.Generic;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.SpineCT.Domain.Interfaces;
using RadioReport.SpineCT.Domain.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.SpineCT.Domain.Enums.SacroiliacJoint;

namespace RadioReport.SpineCT.Domain.Managers
{
    public class SacroiliacJointPageManager : PageWithImageManagerBase<SacroiliacJointPage, ISacroiliacJointPageRepository>
    {
        public override string PageTypeName => PageTypeNames.SpineCtSacroiliacJoint;

        protected override List<Type> FindingTypes => new List<Type> { typeof(SacroiliacJointFindingType) };

        public SacroiliacJointPageManager(ISacroiliacJointPageRepository repository,
            IReportManager reportManager, IReportService reportService, IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) :
            base(reportManager, reportService, repository, kafkaProducer, httpAuthContext, moduleContext)
        {
        }
        
        
        protected override string[] GetIncludes() =>
            new[]
            {
                nameof(SacroiliacJointPage.Findings),
                nameof(SacroiliacJointPage.Findings) + "." + nameof(SacroiliacJointFinding.ImageFile)
            };
    }
}
