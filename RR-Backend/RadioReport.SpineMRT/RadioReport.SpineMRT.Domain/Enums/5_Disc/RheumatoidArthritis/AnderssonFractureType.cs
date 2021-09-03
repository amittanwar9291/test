using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums.Disc
{
    public enum AnderssonFractureType : byte
    {
        None = 0,

        [RadioReportId("spi_m_050242", InstanceName = nameof(DiscFindingType.RheumatoidArthritis), CustomConditionName = nameof(PathologyType.SpondyliltisAnkylosane) + nameof(PathologyType.PsoriaticArthritis))]
        [RadioReportId("spi_m_050539", InstanceName = nameof(DiscFindingType.RheumatoidArthritis), CustomConditionName = nameof(PathologyType.RheumatoidDisease))]
        Transvertebral = 1,

        [RadioReportId("spi_m_050243", InstanceName = nameof(DiscFindingType.RheumatoidArthritis), CustomConditionName = nameof(PathologyType.SpondyliltisAnkylosane) + nameof(PathologyType.PsoriaticArthritis))]
        [RadioReportId("spi_m_050540", InstanceName = nameof(DiscFindingType.RheumatoidArthritis), CustomConditionName = nameof(PathologyType.RheumatoidDisease))]
        Transdiscal = 2
    }
}
