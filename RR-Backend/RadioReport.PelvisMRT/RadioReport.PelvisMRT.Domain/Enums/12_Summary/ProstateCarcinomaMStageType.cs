using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Summary
{
    public enum ProstateCarcinomaMStageType : byte
    {
        None = 0,

        [RadioReportId("pel_m_120511")]
        M1a = 1,
        
        [RadioReportId("pel_m_120512")]
        Mx = 2
    }
}
