using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Domain.Enums.CapsuleAndLigaments
{
    public enum ContrastEnhancementQuantitativeType : byte
    {
        None = 0,
        
        [RadioReportId("hip_m_060326")]
        No = 1,
        
        [RadioReportId("hip_m_060327")]
        Low = 2,
        
        [RadioReportId("hip_m_060328")]
        Pronounced = 3
        
    }
}
