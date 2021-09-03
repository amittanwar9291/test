using System;
using System.Collections.Generic;
using RadioReport.CardioMRT.Domain.Enums.SpatialRequirement;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.CardioMRT.Domain.Interfaces;
using RadioReport.CardioMRT.Domain.Models;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;

namespace RadioReport.CardioMRT.Domain.Managers
{
    public class SpatialRequirementPageManager : PageWithImageManagerBase<SpatialRequirementPage, ISpatialRequirementPageRepository>
    {
        public override string PageTypeName => PageTypeNames.CardioMrtSpatialRequirement;

        protected override List<Type> FindingTypes => new List<Type> { typeof(SpatialRequirementFindingType) };

        public SpatialRequirementPageManager(ISpatialRequirementPageRepository repository,
            IReportManager reportManager, IReportService reportService, IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) :
            base(reportManager, reportService, repository, kafkaProducer, httpAuthContext, moduleContext)
        {
        }

        protected override string[] GetIncludes()
        {
            var imageFilePropertyPath = nameof(SpatialRequirementPage.Findings) + "." + nameof(SpatialRequirementFinding.UploadedImageFile);

            return new[]
            {
                nameof(SpatialRequirementPage.Findings),
                imageFilePropertyPath
            };
        }
    }
}
