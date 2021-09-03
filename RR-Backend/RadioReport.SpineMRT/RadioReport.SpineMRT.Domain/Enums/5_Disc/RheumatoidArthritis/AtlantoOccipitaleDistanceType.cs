using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums.Disc
{
    public enum AtlantoOccipitaleDistanceType : byte
    {
        None = 0,

        [RadioReportId("spi_m_050375", InstanceName = nameof(DiscFindingType.RheumatoidArthritis))]
        LessThan3Mm = 1,

        [RadioReportId("spi_m_050376", InstanceName = nameof(DiscFindingType.RheumatoidArthritis))]
        From3To9Mm = 2,

        [RadioReportId("spi_m_050377", InstanceName = nameof(DiscFindingType.RheumatoidArthritis))]
        MoreThan9Mm = 3
    }
}
