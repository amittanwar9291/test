using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.HeadMRT.Domain.Interfaces;
using RadioReport.HeadMRT.Domain.Models;
using RadioReport.HeadMRT.Domain.Enums.Vessels;
using System;
using System.Collections.Generic;

namespace RadioReport.HeadMRT.Domain.Managers
{
    public class VesselsPageManager: PageWithImageManagerBase<VesselsPage, IVesselsPageRepository>
    {
        public override string PageTypeName => PageTypeNames.HeadMrtVessels;

        protected override List<Type> FindingTypes => new List<Type> { typeof(VesselsFindingType) };

        public VesselsPageManager(IVesselsPageRepository repository, IReportManager reportManager, IReportService reportService,
           IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
           kafkaProducer, httpAuthContext, moduleContext)
        {
        }

        protected override string[] GetIncludes()
        {
            var imageFilePropertyPath = nameof(VesselsPage.Findings) + "." + nameof(VesselsFinding.UploadedImageFile);
            return new[]
            {
                nameof(VesselsPage.Findings),
                imageFilePropertyPath
            };
        }
    }
}
