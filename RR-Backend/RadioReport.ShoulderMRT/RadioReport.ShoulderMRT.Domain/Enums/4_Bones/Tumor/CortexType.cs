using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum CortexType : byte
    {
        None = 0,

        [RadioReportId("sho_m_0403221", InstanceName = nameof(BonesFindingType.BoneTumor))]
        Normal = 1,

        [RadioReportId("sho_m_0403222", InstanceName = nameof(BonesFindingType.BoneTumor))]
        Destruction = 2,

        [RadioReportId("sho_m_0403223", InstanceName = nameof(BonesFindingType.BoneTumor))]
        Thinningscalopping = 3,

        [RadioReportId("sho_m_0403224", InstanceName = nameof(BonesFindingType.BoneTumor))]
        Permeation = 4
    }
}
