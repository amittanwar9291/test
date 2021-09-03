using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Summary
{
    public enum ProstateCarcinomaNStageType : byte
    {
        None = 0,

        [RadioReportId("pel_m_120507")]
        N0 = 1,
        
        [RadioReportId("pel_m_120508")]
        N1 = 2,
        
        [RadioReportId("pel_m_120509")]
        Nx = 3
    }
}
