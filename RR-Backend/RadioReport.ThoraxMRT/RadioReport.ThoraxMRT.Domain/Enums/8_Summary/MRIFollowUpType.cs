using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
    public enum MRIFollowUpType : byte
    {
        None = 0,

        [RadioReportId("tho_m_080105")]
        ThreeMonths = 1,

        [RadioReportId("tho_m_080106")]
        FromThreeToSixMonths = 2,

        [RadioReportId("tho_m_080107")]
        FromSixToTwelveMonths = 3,

        [RadioReportId("tho_m_080108")]
        TwelveMonths = 4,

        [RadioReportId("tho_m_080109")]
        FromEighteenToTwentyFourMonths = 5
    }
}
