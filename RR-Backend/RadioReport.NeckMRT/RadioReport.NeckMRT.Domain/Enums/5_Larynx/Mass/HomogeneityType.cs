using RadioReport.Common.Logic.Attributes;
using RadioReport.NeckMRT.Domain.Models;

namespace RadioReport.NeckMRT.Domain.Enums.Larynx
{
    public enum HomogeneityType: byte
    {
        None = 0,
        
        [RadioReportId("nec_m_050515", InstanceName = nameof(LarynxFinding.HomogeneityType))]
        [RadioReportId("nec_m_050521", InstanceName = nameof(LarynxFinding.CmHomogeneityType))]
        Homogeneous = 1,
        
        [RadioReportId("nec_m_050516", InstanceName = nameof(LarynxFinding.HomogeneityType))]
        [RadioReportId("nec_m_050522", InstanceName = nameof(LarynxFinding.CmHomogeneityType))]
        Heterogeneous = 2
    }
}