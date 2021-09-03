using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HandMRT.Domain.Enums
{
    public enum DorsomedialDrugType : byte
    {
        None = 0,

        [RadioReportId("han_m_0405108", InstanceName = nameof(BonesFindingType.Fracture))]
        Stable = 1,

        [RadioReportId("han_m_0405109", InstanceName = nameof(BonesFindingType.Fracture))]
        Unstable = 2
    }
}
