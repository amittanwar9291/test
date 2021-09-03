using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums.Disc
{
    public enum PathologyType : byte
    {
        None = 0,

        [RadioReportId("spi_m_050344", InstanceName = nameof(DiscFindingType.RheumatoidArthritis))]
        SpondyliltisAnkylosane = 1,

        [RadioReportId("spi_m_050345", InstanceName = nameof(DiscFindingType.RheumatoidArthritis))]
        PsoriaticArthritis = 2,

        [RadioReportId("spi_m_050346", InstanceName = nameof(DiscFindingType.RheumatoidArthritis))]
        RheumatoidArthritis = 3,

        [RadioReportId("spi_m_050347", InstanceName = nameof(DiscFindingType.RheumatoidArthritis))]
        RheumatoidDisease = 4
    }
}
