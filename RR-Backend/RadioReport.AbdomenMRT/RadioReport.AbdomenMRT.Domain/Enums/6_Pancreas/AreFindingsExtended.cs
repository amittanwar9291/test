using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Pancreas
{
    public enum AreFindingsExtended : byte
    {
        None = 0,

        [RadioReportId("abd_m_060104")]
        False = 1,

        [RadioReportId("abd_m_060113")]
        NoDetails = 2,

        [RadioReportId("abd_m_060105")]
        True = 3
    }
}