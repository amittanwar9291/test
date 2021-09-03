using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.ShoulderMRT.Domain.Models;
using RadioReport.ShoulderMRT.Domain.Interfaces;
using System.Collections.Generic;
using System;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.ShoulderMRT.Domain.Enums;

namespace RadioReport.ShoulderMRT.LabrumAndRibbons.Domain.Managers
{
    public class LabrumAndRibbonsPageManager : PageWithImageManagerBase<LabrumAndRibbonsPage, ILabrumAndRibbonsPageRepository>
    {
        public override string PageTypeName => PageTypeNames.ShoulderMrtLabrumAndRibbons;

        protected override List<Type> FindingTypes => new List<Type> { typeof(LabrumAndRibbonsFindingType) };

        public LabrumAndRibbonsPageManager(ILabrumAndRibbonsPageRepository repository,
            IReportManager reportManager, IReportService reportService, IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext)
            : base(reportManager, reportService, repository, kafkaProducer, httpAuthContext, moduleContext)
        {
        }

        protected override string[] GetIncludes()
        {
            var imageFilePropertyPath = nameof(LabrumAndRibbonsPage.Findings) + "." + nameof(LabrumAndRibbonsFinding.UploadedImageFile);
            return new[]
            {
                nameof(LabrumAndRibbonsPage.Findings),
                imageFilePropertyPath
            };
        }
    }
}
