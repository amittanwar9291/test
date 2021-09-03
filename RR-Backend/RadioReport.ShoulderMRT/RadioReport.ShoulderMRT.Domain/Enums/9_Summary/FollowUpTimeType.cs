using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum FollowUpTimeType : byte
	{
        None = 0,

        [RadioReportId("sho_m_090108")]
        ThreeMonths = 1,

        [RadioReportId("sho_m_090109")]
        FromThreeToSixMonths = 2,

        [RadioReportId("sho_m_090110")]
        FromSixToTwelveMonths = 3,

        [RadioReportId("sho_m_090111")]
        TwelveMonths = 4,

        [RadioReportId("sho_m_090112")]
        FromEighteenToTwentyFourMonths = 5
	}
}
