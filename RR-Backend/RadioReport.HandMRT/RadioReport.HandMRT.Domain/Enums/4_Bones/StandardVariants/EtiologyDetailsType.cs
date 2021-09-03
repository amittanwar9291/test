using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HandMRT.Domain.Enums
{
    public enum EtiologyDetailsType : byte
    {
        None = 0,

        [RadioReportId("han_m_0405106", InstanceName = nameof(BonesFindingType.NormVariantsAnomalies))]
        Postinflammatory = 1,

        [RadioReportId("han_m_0405107", InstanceName = nameof(BonesFindingType.NormVariantsAnomalies))]
        Posttraumatic = 2
    }
}
