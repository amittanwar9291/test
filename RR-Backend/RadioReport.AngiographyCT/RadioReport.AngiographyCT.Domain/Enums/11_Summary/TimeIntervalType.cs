
using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums
{
    public enum TimeIntervalType: byte
    {
        None = 0,

        [RadioReportId("ang_c_110308")]
        ThreeMonths = 1,

        [RadioReportId("ang_c_110309")]
        FromThreeToSixMonths = 2,

        [RadioReportId("ang_c_110310")]
        FromSixToTwelveMonths = 3,

        [RadioReportId("ang_c_110311")]
        TwelveMonths = 4,

        [RadioReportId("ang_c_110312")]
        FromEighteenToTwentyFourMonths = 5
    }
}
 