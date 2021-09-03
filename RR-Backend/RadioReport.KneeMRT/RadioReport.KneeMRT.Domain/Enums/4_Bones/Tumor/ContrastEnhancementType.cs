using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums.Bones
{
    public enum ContrastEnhancementType : byte
    {
        None = 0,

        [RadioReportId("kne_m_040471", InstanceName = nameof(BonesFindingType.BonesTumor))]
        Strong = 1,

        [RadioReportId("kne_m_040475", InstanceName = nameof(BonesFindingType.BonesTumor))]
        Low = 2,

        [RadioReportId("kne_m_040476", InstanceName = nameof(BonesFindingType.BonesTumor))]
        No = 3
    }
}