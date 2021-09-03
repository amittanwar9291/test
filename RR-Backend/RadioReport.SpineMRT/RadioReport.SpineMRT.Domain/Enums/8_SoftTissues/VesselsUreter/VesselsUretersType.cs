using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums
{
    public enum VesselsUretersType : byte
    {
        None = 0,

        [RadioReportId("spi_m_080242", InstanceName = nameof(SoftTissuesFindingType.VesselsUreter))]
        VertebralArtery = 1,

        [RadioReportId("spi_m_080243", InstanceName = nameof(SoftTissuesFindingType.VesselsUreter))]
        AortaThoracica = 2,

        [RadioReportId("spi_m_080244", InstanceName = nameof(SoftTissuesFindingType.VesselsUreter))]
        AortaAbdominalis = 3,

        [RadioReportId("spi_m_080245", InstanceName = nameof(SoftTissuesFindingType.VesselsUreter))]
        CommonIliacArtery = 4,

        [RadioReportId("spi_m_080246", InstanceName = nameof(SoftTissuesFindingType.VesselsUreter))]
        ExternIliacArtery = 5,

        [RadioReportId("spi_m_080247", InstanceName = nameof(SoftTissuesFindingType.VesselsUreter))]
        VenaCava = 6,

        [RadioReportId("spi_m_080248", InstanceName = nameof(SoftTissuesFindingType.VesselsUreter))]
        Ureter = 7
    }
}
