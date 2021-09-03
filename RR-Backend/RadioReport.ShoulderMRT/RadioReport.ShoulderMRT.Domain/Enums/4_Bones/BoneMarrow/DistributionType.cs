using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum DistributionType : byte
    {
        None = 0,

        [RadioReportId("sho_m_0405208", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        Subchondral = 1,

        [RadioReportId("sho_m_0405209", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        Focal = 2,

        [RadioReportId("sho_m_0405210", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        Diffuse = 3,

        [RadioReportId("sho_m_0405211", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        DiffusePatchy = 4,

        [RadioReportId("sho_m_0405212", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        SubcorticalEdemaFormation = 5
    }
}
