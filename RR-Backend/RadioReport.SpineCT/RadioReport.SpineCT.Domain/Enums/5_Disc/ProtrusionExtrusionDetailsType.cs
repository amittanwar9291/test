using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineCT.Domain.Enums.Disc
{
    public enum ProtrusionExtrusionDetailsType : byte
    {
        None = 0,

        [RadioReportId("spi_c_050309", InstanceName = nameof(DiscFindingType.Protrusion))]
        [RadioReportId("spi_c_050309", InstanceName = nameof(DiscFindingType.Extrusion))]
        LocalizationAxial = 1,

        [RadioReportId("spi_c_050310", InstanceName = nameof(DiscFindingType.Protrusion))]
        [RadioReportId("spi_c_050310", InstanceName = nameof(DiscFindingType.Extrusion))]
        BroadBased = 2
    }
}
