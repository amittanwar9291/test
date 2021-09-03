using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum CMEnhancementQuantitativeType : byte
    {
        None = 0,

        [RadioReportId("sho_m_0404220", InstanceName = nameof(BonesFindingType.BoneTumor))]
        Strong = 1,

        [RadioReportId("sho_m_0404221", InstanceName = nameof(BonesFindingType.BoneTumor))]
        Low = 2,

        [RadioReportId("sho_m_0404222", InstanceName = nameof(BonesFindingType.BoneTumor))]
        No = 3

    }
}
