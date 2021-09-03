using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums._7_Summary
{
    public enum EvaluationType
    {
        None = 0,

        [RadioReportId("anc_m_070104")]
        Improvement = 1,

        [RadioReportId("anc_m_070105")]
        NoChange = 2,

        [RadioReportId("anc_m_070106")]
        ProgressiveFindingDisease = 3
    }
}