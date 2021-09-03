using RadioReport.Common.Logic.Attributes;
using RadioReport.NeckMRT.Domain.Models;

namespace RadioReport.NeckMRT.Domain.Enums.SoftTissues.MassInflammation
{
    public enum HomogeneityType : byte
    {
        None = 0,
        
        [RadioReportId("nec_m_060442", InstanceName = nameof(SoftTissuesFinding.HomogeneityType))]
        [RadioReportId("nec_m_060355", InstanceName = nameof(SoftTissuesFinding.SignificantHomogeneityType))]
        Homogeneous = 1,
        
        [RadioReportId("nec_m_060443", InstanceName = nameof(SoftTissuesFinding.HomogeneityType))]
        [RadioReportId("nec_m_060356", InstanceName = nameof(SoftTissuesFinding.SignificantHomogeneityType))]
        Heterogeneous = 2
    }
}
