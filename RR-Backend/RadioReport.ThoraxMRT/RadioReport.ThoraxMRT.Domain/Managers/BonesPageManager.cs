using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.ThoraxMRT.Domain.Interfaces;
using RadioReport.ThoraxMRT.Domain.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Models;
using System.Collections.Generic;
using System;
using RadioReport.ThoraxMRT.Domain.Enums;

namespace RadioReport.ThoraxMRT.Domain.Managers
{
    public class BonesPageManager : PageWithImageManagerBase<BonesPage, IBonesPageRepository>
    {
        public override string PageTypeName => PageTypeNames.ThoraxMrtBones;

        protected override List<Type> FindingTypes => new List<Type> { typeof(BonesFindingType) };

        public BonesPageManager(IBonesPageRepository repository, IReportManager reportManager, IReportService reportService,
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }

        protected override string[] GetIncludes()
        {
            var imageFilePropertyPath = nameof(BonesPage.Findings) + "." + nameof(BonesFinding.UploadedImageFile);

            return new[]
            {
                nameof(BonesPage.Findings),
                imageFilePropertyPath
            };
        }
    }
}
