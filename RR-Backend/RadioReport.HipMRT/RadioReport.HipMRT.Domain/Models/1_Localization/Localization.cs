using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;

namespace RadioReport.HipMRT.Domain.Models
{
    public class Localization: ModelBase
    {
        [RadioReportId("hip_m_080330", InstanceName = "DetailsHematomaLocalization")]
        [RadioReportId("hip_m_080415", InstanceName = "DetailsAbscessLocalization")]
        public bool IsBasins { get; set; }

        [RadioReportId("hip_m_080331", InstanceName = "DetailsHematomaLocalization")]
        [RadioReportId("hip_m_080416", InstanceName = "DetailsAbscessLocalization")]
        public bool IsBasinsVentral { get; set; }

        [RadioReportId("hip_m_080332", InstanceName = "DetailsHematomaLocalization")]
        [RadioReportId("hip_m_080417", InstanceName = "DetailsAbscessLocalization")]
        public bool IsBasinsLateral { get; set; }
        
        [RadioReportId("hip_m_080333", InstanceName = "DetailsHematomaLocalization")]
        [RadioReportId("hip_m_080418", InstanceName = "DetailsAbscessLocalization")]
        public bool IsBasinsDorsal { get; set; }

        [RadioReportId("hip_m_080334", InstanceName = "DetailsHematomaLocalization")]
        [RadioReportId("hip_m_080419", InstanceName = "DetailsAbscessLocalization")]
        public bool IsThigh { get; set; }

        [RadioReportId("hip_m_080335", InstanceName = "DetailsHematomaLocalization")]
        [RadioReportId("hip_m_080420", InstanceName = "DetailsAbscessLocalization")]
        public bool IsThighVentral { get; set; }

        [RadioReportId("hip_m_080336", InstanceName = "DetailsHematomaLocalization")]
        [RadioReportId("hip_m_080421", InstanceName = "DetailsAbscessLocalization")]
        public bool IsThighDorsal { get; set; }

        [RadioReportId("hip_m_080337", InstanceName = "DetailsHematomaLocalization")]
        [RadioReportId("hip_m_080422", InstanceName = "DetailsAbscessLocalization")]
        public bool IsThighMedia { get; set; }

        [RadioReportId("hip_m_080338", InstanceName = "DetailsHematomaLocalization")]
        [RadioReportId("hip_m_080423", InstanceName = "DetailsAbscessLocalization")]
        public int? ThighMaxDiameterInMm { get; set; }
    }
}
