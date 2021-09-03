using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Domain.Enums
{
    public enum DateMonthType : byte
    {
        None = 0,

        [RadioReportId("hip_m_090211")]
        Three = 1,

        [RadioReportId("hip_m_090212")]
        ThreeToSix = 2,

        [RadioReportId("hip_m_090213")]
        SixToTwelve = 3,

        [RadioReportId("hip_m_090214")]
        Twelve = 4,

        [RadioReportId("hip_m_090215")]
        EighteenToTwentyFour = 5

    }
}
