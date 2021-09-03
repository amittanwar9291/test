
using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
    public enum CorticalBone : byte
    {
        None = 0,
        
        [RadioReportId("tho_m_070435")]
        Intact = 1,

        [RadioReportId("tho_m_070436")]
        Thinning = 2,
   
        [RadioReportId("tho_m_070437")]
        Destruction = 3,

        [RadioReportId("tho_m_070438")]
        Neocorticalis = 4
    }
}
