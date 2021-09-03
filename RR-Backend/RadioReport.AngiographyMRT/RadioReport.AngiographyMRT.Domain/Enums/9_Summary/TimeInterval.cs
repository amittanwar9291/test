using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyMRT.Domain.Enums.Evaluation
{
    public enum TimeInterval : byte
    {
        None = 0,

        [RadioReportId("ang_m_090207")]
        ThreeMonths = 1,

        [RadioReportId("ang_m_090208")]
        FromThreeToSixMonths = 2,

        [RadioReportId("ang_m_090209")]
        FromSixToTwelveMonths = 3,

        [RadioReportId("ang_m_090210")]
        TwelveMonths = 4,

        [RadioReportId("ang_m_090211")]
        FromEighteenToTwentyFourMonths = 5
    }
}
