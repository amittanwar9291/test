using System.Collections.Generic;
using RadioReport.CardioMRT.Domain.Constants;
using RadioReport.CardioMRT.Domain.Enums;
using RadioReport.CardioMRT.Domain.Enums.Flaps;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;

namespace RadioReport.CardioMRT.Domain.Models
{
    [GeneratedControllerPageWithImageModel("CardioMRT/Flaps", nameof(RadioReport.CardioMRT.Domain.Models.Measures.FlowCurveImage),
        nameof(RadioReport.CardioMRT.Domain.Models.Measures.PCMeasurementImage))]
    public class FlapsPage : PageModelBase<FlapsPage>
    {
        [RadioReportId("car_m_040103-l", InstanceName = InstanceNames.Flaps, IsExportable = false)]
        public AreFindings AreFindings { get; set; }

        [RadioReportId("car_m_040204")]
        public bool IsAortaAscendens { get; set; }

        [RadioReportId("car_m_040204-l", InstanceName = nameof(AortaAscendensMeasures), IsExportable = false)]
        public Measures AortaAscendensMeasures { get; set; }

        [RadioReportId("car_m_040302")]
        public bool IsPulmonaryArtery { get; set; }

        [RadioReportId("car_m_040302-l", InstanceName = nameof(PulmonaryArteryMeasures), IsExportable = false)]
        public Measures PulmonaryArteryMeasures { get; set; }

        [RadioReportId("car_m_040402")]
        public bool IsMitralValve { get; set; }

        [RadioReportId("car_m_040402-l", InstanceName = nameof(MitralValveMeasures), IsExportable = false)]
        public Measures MitralValveMeasures { get; set; }

        [RadioReportId("car_m_040502")]
        public bool IsRVOTObstruction { get; set; }

        [RadioReportId("car_m_040503")]
        public bool IsLVOTObstruction { get; set; }

        public LVOTObstructionType LVOTObstructionType { get; set; }

        public IEnumerable<HeartValve> HeartValves { get; set; }

        public IEnumerable<CongenitalHeartDisease> CongenitalHeartDiseases { get; set; }

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.CardioMrtFlaps;

        public List<Measures> Measures
        {
            get
            {
                var result = new List<Measures>();
                var measures = new[] { AortaAscendensMeasures, PulmonaryArteryMeasures, MitralValveMeasures };
                foreach (var measuresObject in measures)
                {
                    if (measuresObject != null)
                    {
                        result.Add(measuresObject);
                    }
                }
                return result;
            }
        }
    }
}
