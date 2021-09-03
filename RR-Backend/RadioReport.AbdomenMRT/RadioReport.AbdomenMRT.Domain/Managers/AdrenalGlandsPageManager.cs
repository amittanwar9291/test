using RadioReport.Common.Module.Logic.Managers;
using RadioReport.AbdomenMRT.Domain.Interfaces;
using RadioReport.AbdomenMRT.Domain.Models;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using System.Collections.Generic;
using System;
using RadioReport.AbdomenMRT.Domain.Enums.AdrenalGlands;

namespace RadioReport.AbdomenMRT.Domain.Managers
{
    public class AdrenalGlandsPageManager : PageWithImageManagerBase<AdrenalGlandsPage, IAdrenalGlandsPageRepository>
    {
        public override string PageTypeName => PageTypeNames.AbdomenMrtAdrenalGlands;
        protected override List<Type> FindingTypes => new List<Type> { typeof(AdrenalGlandsFindingType) };

        public AdrenalGlandsPageManager(IAdrenalGlandsPageRepository repository, IReportManager reportManager, IReportService reportService,
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }

        protected override string[] GetIncludes()
        {
            var imageFilePropertyPath = nameof(AdrenalGlandsPage.Findings) + "." + nameof(AdrenalGlandsFinding.UploadedImageFile);
            return new[]
            {
                nameof(AdrenalGlandsPage.Findings),
                imageFilePropertyPath
            };
        }
    }
}
