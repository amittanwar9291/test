using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums.Bones
{
    public enum BonesClassificationType : byte
    {
        None = 0,

        [RadioReportId("kne_m_040485", InstanceName = nameof(BonesFindingType.BonesTumor))]
        T1LessThan8cm = 1,

        [RadioReportId("kne_m_040486", InstanceName = nameof(BonesFindingType.BonesTumor))]
        T2LMoreThan8cm = 2,

        [RadioReportId("kne_m_040487", InstanceName = nameof(BonesFindingType.BonesTumor))]
        T3SkipMetastases = 3
    }
}