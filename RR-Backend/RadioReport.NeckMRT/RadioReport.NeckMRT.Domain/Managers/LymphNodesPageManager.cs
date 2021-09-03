using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.NeckMRT.Domain.Interfaces;
using RadioReport.NeckMRT.Domain.Models;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Models;
using RadioReport.NeckMRT.Domain.Enums.LymphNodes;
using System.Collections.Generic;
using System;

namespace RadioReport.NeckMRT.Domain.Managers
{
    public class LymphNodesPageManager : PageWithImageManagerBase<LymphNodesPage, ILymphNodesPageRepository>
    {
        public override string PageTypeName => PageTypeNames.NeckMrtLymphNodes;
        
        protected override List<Type> FindingTypes => new List<Type> { typeof(LymphNodesFindingType) };
        
        public LymphNodesPageManager(ILymphNodesPageRepository repository, IReportManager reportManager, IReportService reportService,
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }

        protected override string[] GetIncludes()
        {
            var imageFilePropertyPath = nameof(LymphNodesPage.Findings) + "." + nameof(LymphNodesFinding.UploadedImageFile);
            return new[]
            {
                nameof(LymphNodesPage.Findings),
                imageFilePropertyPath
            };
        }
    }
}
