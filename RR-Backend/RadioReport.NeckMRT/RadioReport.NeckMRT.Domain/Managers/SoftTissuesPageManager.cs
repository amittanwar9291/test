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
using RadioReport.NeckMRT.Domain.Enums.SoftTissues;

namespace RadioReport.NeckMRT.Domain.Managers
{
    public class SoftTissuesPageManager : PageWithImageManagerBase<SoftTissuesPage, ISoftTissuesPageRepository>
    {
        public override string PageTypeName => PageTypeNames.NeckMrtSoftTissues;

        protected override List<Type> FindingTypes => new List<Type> { typeof(SoftTissuesFindingType) };
        public SoftTissuesPageManager(ISoftTissuesPageRepository repository, IReportManager reportManager, IReportService reportService,
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }
        
        protected override string[] GetIncludes()
        {
            var imageFilePropertyPath = nameof(SoftTissuesPage.Findings) + "." + nameof(SoftTissuesFinding.UploadedImageFile);
            return new[]
            {
                nameof(SoftTissuesPage.Findings),
                imageFilePropertyPath
            };
        }
    }
}
