using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums.Bones
{
    public enum CorticalisType : byte
    {
        None = 0,

        [RadioReportId("kne_m_040375", InstanceName = nameof(BonesFindingType.BonesTumor))]
        Intact = 1,

        [RadioReportId("kne_m_040376", InstanceName = nameof(BonesFindingType.BonesTumor))]
        Destruction = 2,

        [RadioReportId("kne_m_040377", InstanceName = nameof(BonesFindingType.BonesTumor))]
        Thinning = 3,

        [RadioReportId("kne_m_040378", InstanceName = nameof(BonesFindingType.BonesTumor))]
        Transmigration = 4
    }
}