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
using RadioReport.AbdomenMRT.Domain.Enums.Liver;

namespace RadioReport.AbdomenMRT.Domain.Managers
{
    public class LiverPageManager : PageWithImageManagerBase<LiverPage, ILiverPageRepository>
    {
        public override string PageTypeName => PageTypeNames.AbdomenMrtLiver;
        protected override List<Type> FindingTypes => new List<Type> { typeof(LiverFindingType) };

        public LiverPageManager(ILiverPageRepository repository, IReportManager reportManager, IReportService reportService, 
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository, 
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }

        protected override string[] GetIncludes()
        {
            var imageFilePropertyPath = nameof(LiverPage.Findings) + "." + nameof(LiverFinding.UploadedImageFile);
            return new[]
            {
                nameof(LiverPage.Findings),
                imageFilePropertyPath
            };
        }
    }
}
