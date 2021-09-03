using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums._7_Summary
{
    public enum TimeType 
    {
        None = 0,
        
        [RadioReportId("anc_m_070207")]
        ThreeMonths = 1,

        [RadioReportId("anc_m_070208")]
        FromThreeToSixMonths = 2,

        [RadioReportId("anc_m_070209")]
        FromSixToTwelveMonths = 3,

        [RadioReportId("anc_m_070210")]
        TwelveMonths = 4,

        [RadioReportId("anc_m_070211")]
        FromEighteenToTwentyFourMonths = 5
    }
}