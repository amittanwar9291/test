using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.UpperArteries
{
    public enum ImpressionType : byte
    {
        None = 0,
        [RadioReportId("ang_c_060506")]
        Progression = 1,
        
        [RadioReportId("ang_c_060507")]
        Stable = 2,
        
        [RadioReportId("ang_c_060508")]
        Regression = 3
    }
}
