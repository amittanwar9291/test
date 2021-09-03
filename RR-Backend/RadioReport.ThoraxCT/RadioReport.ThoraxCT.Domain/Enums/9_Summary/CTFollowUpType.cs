using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
    public enum CTFollowUpType : byte
    {
        None = 0,

        [RadioReportId("tho_c_090105")]
        ThreeMonths = 1,

        [RadioReportId("tho_c_090106")]
        FromThreeToSixMonths = 2,

        [RadioReportId("tho_c_090107")]
        FromSixToTwelveMonths = 3,

        [RadioReportId("tho_c_090108")]
        TwelveMonths = 4,

        [RadioReportId("tho_c_090109")]
        FromEighteenToTwentyFourMonths = 5
    }
}
