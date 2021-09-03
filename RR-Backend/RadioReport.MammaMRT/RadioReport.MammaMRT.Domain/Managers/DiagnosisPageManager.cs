using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.MammaMRT.Domain.Enums;
using RadioReport.MammaMRT.Domain.Interfaces;
using RadioReport.MammaMRT.Domain.Models;
using System;
using System.Collections.Generic;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Interfaces;

namespace RadioReport.MammaMRT.Domain.Managers
{
    public class DiagnosisPageManager : PageWithImageManagerBase<DiagnosisPage, IDiagnosisPageRepository>
    {
        public override string PageTypeName => PageTypeNames.MammaMrtDiagnosis;
        protected override List<Type> FindingTypes => new List<Type>() { typeof(DiagnosisFindingType) };

        public DiagnosisPageManager(IDiagnosisPageRepository repository, IReportManager reportManager, IReportService reportService,
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }

        protected override string[] GetIncludes()
        {
            var imageFilePropertyPath = nameof(DiagnosisPage.Findings) + "." + nameof(DiagnosisFinding.UploadedImageFile);
            return new[]
            {
                nameof(DiagnosisPage.Findings),
                imageFilePropertyPath
            };
        }
    }
}
