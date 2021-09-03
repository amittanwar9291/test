using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineCT.Domain.Enums.SoftTissues
{
    public enum AffectedVesselOrUreterType : byte
    {
        None = 0,

        [RadioReportId("spi_c_080242", InstanceName = nameof(SoftTissuesFindingType.VesselsUreter))]
        VertebralArtery = 1,

        [RadioReportId("spi_c_080243", InstanceName = nameof(SoftTissuesFindingType.VesselsUreter))]
        ThoracicAorta = 2,

        [RadioReportId("spi_c_080244", InstanceName = nameof(SoftTissuesFindingType.VesselsUreter))]
        AbdominalAorta = 3,

        [RadioReportId("spi_c_080245", InstanceName = nameof(SoftTissuesFindingType.VesselsUreter))]
        CommonIliacArtery = 4,

        [RadioReportId("spi_c_080246", InstanceName = nameof(SoftTissuesFindingType.VesselsUreter))]
        ExternalIliacArtery = 5,

        [RadioReportId("spi_c_080247", InstanceName = nameof(SoftTissuesFindingType.VesselsUreter))]
        VenaCava = 6,

        [RadioReportId("spi_c_080248", InstanceName = nameof(SoftTissuesFindingType.VesselsUreter))]
        Ureter = 7
    }
}
