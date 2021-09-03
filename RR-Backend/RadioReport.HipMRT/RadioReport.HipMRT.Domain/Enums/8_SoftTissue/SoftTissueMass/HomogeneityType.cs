using RadioReport.Common.Logic.Attributes;
using RadioReport.HipMRT.Domain.Models;

namespace RadioReport.HipMRT.Domain.Enums.SoftTissue
{
    public enum HomogeneityType : byte
    {
        None = 0,

        [RadioReportId("hip_m_080519", InstanceName = nameof(SoftTissueFinding.HomogeneityType))]
        [RadioReportId("hip_m_080525", InstanceName = nameof(SoftTissueFinding.CMHomogeneityType))]
        Homogeneous = 1,
        
        [RadioReportId("hip_m_080520", InstanceName = nameof(SoftTissueFinding.HomogeneityType))]
        [RadioReportId("hip_m_080526", InstanceName = nameof(SoftTissueFinding.CMHomogeneityType))]
        Heterogeneous = 2
    }
}