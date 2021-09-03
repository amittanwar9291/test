using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums.Disc
{
    public enum SpondylitisNumberType : byte
    {
        None = 0,

        [RadioReportId("spi_m_050529", InstanceName = nameof(DiscFindingType.RheumatoidArthritis))]
        SpondylitisNumberLessThan3 = 1,

        [RadioReportId("spi_m_050530", InstanceName = nameof(DiscFindingType.RheumatoidArthritis))]
        SpondylitisNumberMoreOrEqual3 = 2
    }
}