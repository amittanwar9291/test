using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HandMRT.Domain.Enums
{
    public enum StandardVariantsType : byte
    {
        None = 0,

        [RadioReportId("han_m_040203", InstanceName = nameof(BonesFindingType.NormVariantsAnomalies))]
        AccessoryCarpalBones = 1,

        [RadioReportId("han_m_0402100", InstanceName = nameof(BonesFindingType.NormVariantsAnomalies))]
        CarpalCoalition = 2,

        [RadioReportId("han_m_0402101", InstanceName = nameof(BonesFindingType.NormVariantsAnomalies))]
        CarpalBonesDivision = 3,

        [RadioReportId("han_m_0402102", InstanceName = nameof(BonesFindingType.NormVariantsAnomalies))]
        NormVariantsOfOsLunatum = 4
    }
}
