using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum LimitationType : byte
    {
        None = 0,

        [RadioReportId("sho_m_0402224", InstanceName = nameof(BonesFindingType.BoneTumor))]
        Sharp = 1,

        [RadioReportId("sho_m_0402225", InstanceName = nameof(BonesFindingType.BoneTumor))]
        IIIDefinedMargin = 2,

        [RadioReportId("sho_m_0402226", InstanceName = nameof(BonesFindingType.BoneTumor))]
        BrushShaped = 3
    }
}
