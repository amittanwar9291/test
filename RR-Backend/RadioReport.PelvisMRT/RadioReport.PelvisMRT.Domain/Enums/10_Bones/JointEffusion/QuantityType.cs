using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bones
{
    public enum QuantityType : byte
    {
        None = 0,

        [RadioReportId("pel_m_1003111", InstanceName = nameof(BonesFindingType.JointEffusion))]
        SlightlyPronounced = 1,
        
        [RadioReportId("pel_m_1003112", InstanceName = nameof(BonesFindingType.JointEffusion))]
        ModeratelyPronounced = 2,
        
        [RadioReportId("pel_m_1003113", InstanceName = nameof(BonesFindingType.JointEffusion))]
        StronglyPronounced = 3
    }
}
