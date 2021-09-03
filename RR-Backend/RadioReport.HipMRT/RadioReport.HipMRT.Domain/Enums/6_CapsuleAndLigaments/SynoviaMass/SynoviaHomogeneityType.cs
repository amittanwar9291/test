using RadioReport.Common.Logic.Attributes;
using RadioReport.HipMRT.Domain.Models.CapsuleAndLigaments;

namespace RadioReport.HipMRT.Domain.Enums
{
    public enum SynoviaHomogeneityType : byte
    {
        None = 0,
        
        [RadioReportId("hip_m_060323", InstanceName = nameof(CapsuleAndLigamentsFinding.CharacterizationIIHomogeneityType))]
        [RadioReportId("hip_m_060329", InstanceName = nameof(CapsuleAndLigamentsFinding.PronouncedHomogeneityType))]
        Homogeneous = 1,
        
        [RadioReportId("hip_m_060324", InstanceName = nameof(CapsuleAndLigamentsFinding.CharacterizationIIHomogeneityType))]
        [RadioReportId("hip_m_060330", InstanceName = nameof(CapsuleAndLigamentsFinding.PronouncedHomogeneityType))]
        Heterogeneous = 2
    }
}
