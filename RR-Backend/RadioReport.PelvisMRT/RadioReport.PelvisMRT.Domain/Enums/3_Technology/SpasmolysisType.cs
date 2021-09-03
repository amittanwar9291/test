using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Technology
{
    public enum SpasmolysisType : byte
    {
        None = 0,

        [RadioReportId("pel_m_030503")]
        IV = 1,

        [RadioReportId("pel_m_030504")]
        IM = 2
    }
}
