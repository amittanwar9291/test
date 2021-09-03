using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyMRT.Domain.Enums.Evaluation
{
    public enum ComparisonToPriorExamsType : byte
    {
        None = 0,

        [RadioReportId("ang_m_090104")]
        ProgressiveFindingOrDisease = 1,

        [RadioReportId("ang_m_090105")]
        NoChange = 2,

        [RadioReportId("ang_m_090106")]
        Improvement = 3
    }
}
