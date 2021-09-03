using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.NeckMRT.Domain.Interfaces;
using RadioReport.NeckMRT.Domain.Models;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Models;
using System.Collections.Generic;
using System;
using RadioReport.NeckMRT.Domain.Enums.Larynx;

namespace RadioReport.NeckMRT.Domain.Managers
{
    public class LarynxPageManager : PageWithImageManagerBase<LarynxPage, ILarynxPageRepository>
    {
        public override string PageTypeName => PageTypeNames.NeckMrtLarynx;
        
        protected override List<Type> FindingTypes => new List<Type> { typeof(LarynxFindingType) };

        public LarynxPageManager(ILarynxPageRepository repository, IReportManager reportManager, IReportService reportService,
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }

        protected override string[] GetIncludes()
        {
            var imageFilePropertyPath = nameof(LarynxPage.Findings) + "." + nameof(LarynxFinding.UploadedImageFile);
            return new[]
            {
                nameof(LarynxPage.Findings),
                imageFilePropertyPath
            };
        }
    }
}
