using System;
using System.Collections.Generic;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.ThoraxCT.Domain.Interfaces;
using RadioReport.ThoraxCT.Domain.Models;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.ThoraxCT.Domain.Enums;

namespace RadioReport.ThoraxCT.Domain.Managers
{
    public class LungParenchymaPageManager : PageWithImageManagerBase<LungParenchymaPage, ILungParenchymaPageRepository>
    {
        public override string PageTypeName => PageTypeNames.ThoraxCtLungParenchyma;

        protected override List<Type> FindingTypes => new List<Type> { typeof(LungParenchymaFindingType) };

        public LungParenchymaPageManager(ILungParenchymaPageRepository repository, IReportManager reportManager, IReportService reportService,
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }

        protected override string[] GetIncludes()
        {
            var imageFilePropertyPath = nameof(LungParenchymaPage.Findings) + "." + nameof(LungParenchymaFinding.UploadedImageFile);
            return new[]
            {
                nameof(LungParenchymaPage.Findings),
                imageFilePropertyPath
            };
        }
    }
}
