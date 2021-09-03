using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums.Disc
{
    public enum EntheitisType : byte
    {
        None = 0,

        [RadioReportId("spi_m_0502200", InstanceName = nameof(DiscFindingType.RheumatoidArthritis), CustomConditionName = nameof(PathologyType.SpondyliltisAnkylosane) + nameof(PathologyType.PsoriaticArthritis))]
        [RadioReportId("spi_m_0502406", InstanceName = nameof(DiscFindingType.RheumatoidArthritis), CustomConditionName = nameof(PathologyType.RheumatoidDisease))]
        Floride = 1,

        [RadioReportId("spi_m_050210", InstanceName = nameof(DiscFindingType.RheumatoidArthritis))]
        Chronic = 2
    }
}
