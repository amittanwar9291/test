using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.ShoulderMRT.Domain.Enums;
using RadioReport.ShoulderMRT.Domain.Interfaces;
using RadioReport.ShoulderMRT.Domain.Models;
using System;
using System.Collections.Generic;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Interfaces;

namespace RadioReport.ShoulderMRT.Rotator.Domain.Managers
{
    public class RotatorPageManager : PageWithImageManagerBase<RotatorPage, IRotatorPageRepository>
    {
        public override string PageTypeName => PageTypeNames.ShoulderMrtRotator;

        protected override List<Type> FindingTypes => new List<Type> { typeof(RotatorFindingType) };

        public RotatorPageManager(IRotatorPageRepository repository, IReportManager reportManager, IReportService reportService,
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }

        protected override string[] GetIncludes()
        {
            var imageFilePropertyPath = nameof(RotatorPage.Findings) + "." + nameof(RotatorFinding.UploadedImageFile);
            return new[]
            {
                nameof(RotatorPage.Findings),
                imageFilePropertyPath
            };
        }
    }
}
