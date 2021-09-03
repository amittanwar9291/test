using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Domain.Enums.CapsuleAndLigaments
{
    public enum ContrastEnhancementDistributionType : byte
    {
        None = 0,
        
        [RadioReportId("hip_m_060332")]
        EntireLesion = 1,
        
        [RadioReportId("hip_m_060333")]
        Central = 2,
        
        [RadioReportId("hip_m_060334")]
        Marginal = 3,
        
        [RadioReportId("hip_m_060335")]
        Peripheral = 4,
        
        [RadioReportId("hip_m_060336")]
        Septal = 5
    }
}
