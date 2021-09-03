using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.KneeMRT.Domain.Enums;
using RadioReport.KneeMRT.Domain.Interfaces;
using RadioReport.KneeMRT.Domain.Models;
using System;
using System.Collections.Generic;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Models;

namespace RadioReport.KneeMRT.Domain.Managers
{
    public class RibbonsPageManager : PageWithImageManagerBase<RibbonsPage, IRibbonsPageRepository>
    {
        public override string PageTypeName => PageTypeNames.KneeMrtRibbons;
        protected override List<Type> FindingTypes => new List<Type>() { typeof(RibbonsFindingType) };

        public RibbonsPageManager(IRibbonsPageRepository repository, IReportManager reportManager, IReportService reportService,
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }

        protected override string[] GetIncludes()
        {
            var imageFilePropertyPath = nameof(RibbonsPage.Findings) + "." + nameof(RibbonsFinding.UploadedImageFile);
            return new[]
            {
                nameof(RibbonsPage.Findings),
                imageFilePropertyPath
            };
        }
    }
}
