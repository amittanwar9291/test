using System;
using System.Collections.Generic;
using RadioReport.AbdomenCT.Domain.Enums.Spleen;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.AbdomenCT.Domain.Interfaces;
using RadioReport.AbdomenCT.Domain.Models;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;

namespace RadioReport.AbdomenCT.Domain.Managers
{
    public class SpleenPageManager : PageWithImageManagerBase<SpleenPage, ISpleenPageRepository>
    {
        public override string PageTypeName => PageTypeNames.AbdomenCtSpleen;

        protected override List<Type> FindingTypes => new List<Type> { typeof(SpleenFindingType) };

        public SpleenPageManager(ISpleenPageRepository repository, IReportManager reportManager, IReportService reportService,
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }

        protected override string[] GetIncludes()
        {
            var imageFilePropertyPath = nameof(SpleenPage.Findings) + "." + nameof(SpleenFinding.UploadedImageFile);

            return new[]
            {
                nameof(SpleenPage.Findings),
                imageFilePropertyPath
            };
        }
    }
}
