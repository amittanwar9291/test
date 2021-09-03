using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.HeadCT.Domain.Enums.Vessels;
using RadioReport.HeadCT.Domain.Interfaces;
using RadioReport.HeadCT.Domain.Models;
using System;
using System.Collections.Generic;

namespace RadioReport.HeadCT.Domain.Managers
{
    public class VesselsPageManager: PageWithImageManagerBase<VesselsPage, IVesselsPageRepository>
    {
        public override string PageTypeName => PageTypeNames.HeadCtVessels;

        protected override List<Type> FindingTypes => new List<Type> { typeof(VesselsFindingType) };

        public VesselsPageManager(IVesselsPageRepository repository, IReportManager reportManager, IReportService reportService,
           IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
           kafkaProducer, httpAuthContext, moduleContext)
        {
        }

        protected override string[] GetIncludes() =>
            new[]
            {
                nameof(VesselsPage.Findings),
                nameof(VesselsPage.Findings) + "." + nameof(VesselsFinding.ImageFile),
                nameof(VesselsPage.Findings) + "." + nameof(VesselsFinding.Perfusion01ImageFile),
                nameof(VesselsPage.Findings) + "." + nameof(VesselsFinding.Perfusion02ImageFile)
            };
    }
}
