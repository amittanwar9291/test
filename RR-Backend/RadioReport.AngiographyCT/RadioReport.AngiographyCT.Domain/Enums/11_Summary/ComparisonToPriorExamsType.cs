
using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums
{
    public enum ComparisonToPriorExamsType: byte
    {
        None = 0,

        [RadioReportId("ang_c_110104")]
        ProgressiveFindingOrDisease = 1,

        [RadioReportId("ang_c_110105")]
        NoChange = 2,

        [RadioReportId("ang_c_110106")]
        Improvement = 3
    }
}
 