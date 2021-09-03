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
using RadioReport.NeckMRT.Domain.Enums.Pharynx;

namespace RadioReport.NeckMRT.Domain.Managers
{
    public class PharynxPageManager : PageWithImageManagerBase<PharynxPage, IPharynxPageRepository>
    {
        public override string PageTypeName => PageTypeNames.NeckMrtPharynx;
        
        protected override List<Type> FindingTypes => new List<Type> { typeof(PharynxFindingType) };

        public PharynxPageManager(IPharynxPageRepository repository, IReportManager reportManager, IReportService reportService,
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }

        protected override string[] GetIncludes()
        {
            var imageFilePropertyPath = nameof(PharynxPage.Findings) + "." + nameof(PharynxFinding.UploadedImageFile);
            return new[]
            {
                nameof(PharynxPage.Findings),
                imageFilePropertyPath
            };
        }
    }
}
