using System;
using System.Collections.Generic;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.HipMRT.Domain.Interfaces;
using RadioReport.HipMRT.Domain.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.HipMRT.Bones.Domain.Enums;
using RadioReport.HipMRT.Domain.Models.Bones;

namespace RadioReport.HipMRT.Domain.Managers
{
    public class BonesPageManager : PageWithImageManagerBase<BonesPage, IBonesPageRepository>
    {
        public override string PageTypeName => PageTypeNames.HipMrtBones;

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
