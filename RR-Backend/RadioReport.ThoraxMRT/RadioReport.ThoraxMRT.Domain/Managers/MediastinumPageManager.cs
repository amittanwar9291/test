using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Managers;
using RadioReport.ThoraxMRT.Domain.Interfaces;
using RadioReport.ThoraxMRT.Domain.Models;
using RadioReport.Common.Module.Logic.Consts;
using RadioReport.Common.Module.Logic.Interfaces;
using System;
using System.Collections.Generic;
using RadioReport.ThoraxMRT.Domain.Enums;

namespace RadioReport.ThoraxMRT.Domain.Managers
{
    public class MediastinumPageManager : PageManagerBase<MediastinumPage, IMediastinumPageRepository>
    {
        public override string PageTypeName => PageTypeNames.ThoraxMrtMediastinum;

        protected override List<Type> FindingTypes => new List<Type> { typeof(MediastinumFindingType) };

        public MediastinumPageManager(IMediastinumPageRepository repository, IReportManager reportManager, IReportService reportService,
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }
    }
}
