using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum DescriptionType : byte
    {
        None = 0,

        [RadioReportId("sho_m_060108")]
        [RadioReportId("sho_m_040109", InstanceName = nameof(BonesFindingType.BoneTumor))]
        IDescribe = 1,

        [RadioReportId("sho_m_060109")]
        [RadioReportId("sho_m_040110", InstanceName = nameof(BonesFindingType.BoneTumor))]
        IKnow = 2
    }
}
