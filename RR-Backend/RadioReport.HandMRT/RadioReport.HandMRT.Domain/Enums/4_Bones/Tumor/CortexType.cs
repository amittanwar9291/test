using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HandMRT.Domain.Enums
{
    public enum CortexType : byte
    {
        None = 0,

        [RadioReportId("han_m_040273", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        Intact = 1,

        [RadioReportId("han_m_040274", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        Thinning = 2,

        [RadioReportId("han_m_040275", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        Destruction = 3,

        [RadioReportId("han_m_040276", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        Neocortex = 4
    }
}