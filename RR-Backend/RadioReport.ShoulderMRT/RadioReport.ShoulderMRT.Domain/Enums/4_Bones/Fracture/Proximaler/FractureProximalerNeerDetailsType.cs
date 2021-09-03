using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum FractureProximalerNeerDetailsType : byte
    {
        None = 0,

        [RadioReportId("sho_m_040517", InstanceName = nameof(BonesFindingType.Fracture))]
        VarusHeadDeformity = 1,

        [RadioReportId("sho_m_040518", InstanceName = nameof(BonesFindingType.Fracture))]
        Latus = 2,

        [RadioReportId("sho_m_040519", InstanceName = nameof(BonesFindingType.Fracture))]
        Axim = 3,

        [RadioReportId("sho_m_040520", InstanceName = nameof(BonesFindingType.Fracture))]
        TwoPartFracture = 4,

        [RadioReportId("sho_m_040521", InstanceName = nameof(BonesFindingType.Fracture))]
        ThreePartFracture = 5,

        [RadioReportId("sho_m_040522", InstanceName = nameof(BonesFindingType.Fracture))]
        FourPartFracture = 6,

        [RadioReportId("sho_m_040523", InstanceName = nameof(BonesFindingType.Fracture))]
        Anterior = 7,

        [RadioReportId("sho_m_040524", InstanceName = nameof(BonesFindingType.Fracture))]
        Posterior = 8
    }
}
