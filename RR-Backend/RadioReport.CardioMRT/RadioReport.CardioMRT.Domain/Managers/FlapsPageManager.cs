using RadioReport.Common.Module.Logic.Managers;
using RadioReport.CardioMRT.Domain.Interfaces;
using RadioReport.CardioMRT.Domain.Models;
using System;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Consts;
using System.Collections.Generic;
using RadioReport.CardioMRT.Domain.Enums.Flaps;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Models;
using RadioReport.Common.Module.Logic.Interfaces;

namespace RadioReport.CardioMRT.Domain.Managers
{
    public class FlapsPageManager : PageWithImageManagerBase<FlapsPage, IFlapsPageRepository>
    {
        public override string PageTypeName => PageTypeNames.CardioMrtFlaps;

        protected override List<Type> FindingTypes => new List<Type> { typeof(HeartValveFindingType), typeof(CongenitalHeartDiseaseFindingType) };

        public FlapsPageManager(IFlapsPageRepository repository, IReportManager reportManager, IReportService reportService,
            IKafkaProducer kafkaProducer, HttpAuthContext httpAuthContext, ModuleContext moduleContext) : base(reportManager, reportService, repository,
            kafkaProducer, httpAuthContext, moduleContext)
        {
        }

        protected override string[] GetIncludes() =>
            new[]
            {
                nameof(FlapsPage.AortaAscendensMeasures),
                nameof(FlapsPage.PulmonaryArteryMeasures),
                nameof(FlapsPage.MitralValveMeasures),
                nameof(FlapsPage.HeartValves),
                nameof(FlapsPage.CongenitalHeartDiseases),
                nameof(FlapsPage.AortaAscendensMeasures) + "." + nameof(FlapsPage.AortaAscendensMeasures.FlowCurveImage),
                nameof(FlapsPage.AortaAscendensMeasures) + "." + nameof(FlapsPage.AortaAscendensMeasures.PCMeasurementImage),
                nameof(FlapsPage.PulmonaryArteryMeasures) + "." + nameof(FlapsPage.PulmonaryArteryMeasures.FlowCurveImage),
                nameof(FlapsPage.PulmonaryArteryMeasures) + "." + nameof(FlapsPage.PulmonaryArteryMeasures.PCMeasurementImage),
                nameof(FlapsPage.MitralValveMeasures) + "." +nameof(FlapsPage.MitralValveMeasures.FlowCurveImage),
                nameof(FlapsPage.MitralValveMeasures) + "." +nameof(FlapsPage.MitralValveMeasures.PCMeasurementImage)
            };
    }
}
