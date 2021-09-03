using System;
using System.Collections.Generic;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.HandMRT.Domain.Interfaces;
using RadioReport.HandMRT.Domain.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.HandMRT.Domain.Enums;

namespace RadioReport.HandMRT.Domain.Managers
{
    public class NerveCompressionPageManager : PageManagerBase<NerveCompressionPage, INerveCompressionPageRepository>
    {
        public override string PageTypeName => PageTypeNames.HandMrtNerveCompression;

        protected override List<Type> FindingTypes => new List<Type> { typeof(NerveCompressionFindingType) };

        public NerveCompressionPageManager(INerveCompressionPageRepository repository,
            IReportManager reportManager, IReportService reportService, IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) :
            base(reportManager, reportService, repository, kafkaProducer, httpAuthContext, moduleContext)
        {
        }
    }
}
