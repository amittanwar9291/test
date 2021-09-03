using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Domain.Enums.CapsuleAndLigaments
{
    public enum MarginType : byte
    {
        None = 0,
        
        [RadioReportId("hip_m_060320")]
        Sharp = 1,
        
        [RadioReportId("hip_m_060321")]
        IllDefined = 2
    }
}
