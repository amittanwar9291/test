using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.ThoraxCT.Domain.Interfaces;
using RadioReport.ThoraxCT.Domain.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using System.Collections.Generic;
using System;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Models;
using RadioReport.ThoraxCT.Domain.Enums;

namespace RadioReport.ThoraxCT.Domain.Managers
{
    public class LungInterstitiumPageManager : PageWithImageManagerBase<LungInterstitiumPage, ILungInterstitiumPageRepository>
    {
        public override string PageTypeName => PageTypeNames.ThoraxCtLungInterstitium;

        protected override List<Type> FindingTypes => new List<Type> { typeof(LungInterstitiumFindingType) };

        public LungInterstitiumPageManager(ILungInterstitiumPageRepository repository,
            IReportManager reportManager, IReportService reportService, IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) :
            base(reportManager, reportService, repository, kafkaProducer, httpAuthContext, moduleContext)
        {
        }

        protected override string[] GetIncludes()
        {
            var imageFilePropertyPath = nameof(LungInterstitiumPage.Findings) + "." + nameof(LungInterstitiumFinding.UploadedImageFile);
            return new[]
            {
                nameof(LungInterstitiumPage.Findings),
                imageFilePropertyPath
            };
        }
    }
}
