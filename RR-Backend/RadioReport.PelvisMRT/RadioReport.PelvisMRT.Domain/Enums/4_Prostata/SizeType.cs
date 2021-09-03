using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Prostata
{

    public enum SizeType : byte
    {
        None = 0,

        [RadioReportId("pel_m_040234")]
        LessThan1Dot5cm = 1,

        [RadioReportId("pel_m_040235")]
        MoreEqualThan1Dot5cm = 2

    }
}