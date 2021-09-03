using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.SpineMRT.Domain.Enums;
using RadioReport.SpineMRT.Domain.Enums.Anamnesis;

namespace RadioReport.SpineMRT.Domain.Models
{
    public class Intervention : FindingBase
    {
        public override string InstanceName => InterventionType.ToString();

        [RadioReportId("spi_m_020105")]
        public InterventionType InterventionType { get; set; }

        [RadioReportId("spi_m_020203", InstanceName = nameof(InterventionType.Spondylodesis))]
        [RadioReportId("spi_m_020204", InstanceName = nameof(InterventionType.Laminectomy))]
        [RadioReportId("spi_m_020207", InstanceName = nameof(InterventionType.DiscReplacement))]
        [RadioReportId("spi_m_020204", InstanceName = nameof(InterventionType.VertebraReplacement))]
        [RadioReportId("spi_m_020204", InstanceName = nameof(InterventionType.BoneCementApplication))]
        public SpineLocations SpineLocation { get; set; }

        public DetailInterventionType DetailInterventionType { get; set; }
    }
}
