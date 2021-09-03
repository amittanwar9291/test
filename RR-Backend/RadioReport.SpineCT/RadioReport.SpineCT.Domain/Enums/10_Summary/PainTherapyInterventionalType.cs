using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineCT.Domain.Enums.Summary
{
    public enum PainTherapyInterventionalType : byte
    {
        None = 0,

        [RadioReportId("spi_c_100206")]
        Periradicular = 1,

        [RadioReportId("spi_c_100207")]
        Epidural = 2,

        [RadioReportId("spi_c_100208")]
        FacetJointInfiltration = 3,

        [RadioReportId("spi_c_100209")]
        ISGInfiltration = 4

    }
}
