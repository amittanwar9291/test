using System;
using System.Collections.Generic;
using RadioReport.AbdomenMRT.Domain.Enums.GastrointestinalTract;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.AbdomenMRT.Domain.Interfaces;
using RadioReport.AbdomenMRT.Domain.Models;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;

namespace RadioReport.AbdomenMRT.Domain.Managers
{
    public class GastrointestinalTractPageManager : PageWithImageManagerBase<GastrointestinalTractPage, IGastrointestinalTractPageRepository>
    {
        public override string PageTypeName => PageTypeNames.AbdomenMrtGastrointestinalTract;

        protected override List<Type> FindingTypes => new List<Type> { typeof(GastrointestinalTractFindingType) };

        public GastrointestinalTractPageManager(IGastrointestinalTractPageRepository repository, IReportManager reportManager, IReportService reportService,
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }

        protected override string[] GetIncludes()
        {
            var imageFilePropertyPath = nameof(GastrointestinalTractPage.Findings) + "." + nameof(GastrointestinalTractFinding.UploadedImageFile);

            return new[]
            {
                nameof(GastrointestinalTractPage.Findings),
                imageFilePropertyPath
            };
        }
    }
}
