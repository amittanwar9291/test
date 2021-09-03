using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums.Bones
{
    public enum DistributionType : byte
    {
        None = 0,

        [RadioReportId("kne_m_040341", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        Subchondral = 1,

        [RadioReportId("kne_m_040342", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        Circumscribed = 2,

        [RadioReportId("kne_m_040343", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        Diffuse = 3
    }
}