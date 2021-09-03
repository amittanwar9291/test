using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums.Summary
{
    public enum TCategoryType : byte
    {
        None = 0,

        [RadioReportId("elb_m_080303")]
        T1LessOrEqual8CmInLargestDimension = 1,

        [RadioReportId("elb_m_080304")]
        T2GreaterThan8CmInLargestDimension = 2,

        [RadioReportId("elb_m_080305")]
        T3DiscontinuousSpread = 3
    }
}