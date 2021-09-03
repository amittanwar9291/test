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


namespace RadioReport.ShoulderMRT.JointAndBursae.Domain.Managers
{
    public class JointAndBursaePageManager : PageWithImageManagerBase<JointAndBursaePage, IJointAndBursaePageRepository>
    {
        public override string PageTypeName => PageTypeNames.ShoulderMrtJointAndBursae;

        protected override List<Type> FindingTypes => new List<Type> { typeof(JointAndBursaeFindingType) };

        public JointAndBursaePageManager(IJointAndBursaePageRepository repository,
            IReportManager reportManager, IReportService reportService, IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext)
            : base(reportManager, reportService, repository, kafkaProducer, httpAuthContext, moduleContext)
        {
        }

        protected override string[] GetIncludes()
        {
            var imageFilePropertyPath = nameof(JointAndBursaePage.Findings) + "." + nameof(JointAndBursaeFinding.UploadedImageFile);
            return new[]
            {
                nameof(JointAndBursaePage.Findings),
                imageFilePropertyPath
            };
        }
    }
}
