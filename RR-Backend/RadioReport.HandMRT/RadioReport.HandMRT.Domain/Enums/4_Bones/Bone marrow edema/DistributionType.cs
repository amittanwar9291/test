using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HandMRT.Domain.Enums
{
    public enum DistributionType : byte
    {
        None = 0,

        [RadioReportId("han_m_0403266", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        Subchondral = 1,

        [RadioReportId("han_m_0403267", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        Circumscribed = 2,

        [RadioReportId("han_m_0403268", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        Diffuse = 3,

        [RadioReportId("han_m_0403269", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        DiffusePatchy = 4,

        [RadioReportId("han_m_0403270", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        SubcorticalEdema = 5
    }
}
