using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums._7_Summary
{
    public enum TClassificationType
    {
        None = 0,

        [RadioReportId("anc_m_070303")]
        T1CmInLargest = 1,

        [RadioReportId("anc_m_070304")]
        T2CmInLargest = 2,

        [RadioReportId("anc_m_070305")]
        T3DiscontinuousSpreadinPrimarily = 3
    }
}