using RadioReport.Common.Logic.Attributes;
using RadioReport.ShoulderMRT.Domain.Models;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum HomogeneityType : byte
    {
        None = 0,

        [RadioReportId("sho_m_0402228", InstanceName = nameof(BonesFinding.HomogeneityType))]
        [RadioReportId("sho_m_0404224", InstanceName = nameof(BonesFinding.NoCMEnhancementHomogeneityType))]
        Inhomogeneous = 1,

        [RadioReportId("sho_m_0402229", InstanceName = nameof(BonesFinding.HomogeneityType))]
        [RadioReportId("sho_m_0404223", InstanceName = nameof(BonesFinding.NoCMEnhancementHomogeneityType))]
        Homogeneous = 2
    }
}
