using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum FractureProximalerAoRatingType : byte
    {
        None = 0,

        [RadioReportId("sho_m_040402", InstanceName = nameof(BonesFindingType.Fracture))]
        TwoPartFractureExtraarticular = 1,

        [RadioReportId("sho_m_040403", InstanceName = nameof(BonesFindingType.Fracture))]
        ThreePartFractureExtraarticular = 2,

        [RadioReportId("sho_m_040404", InstanceName = nameof(BonesFindingType.Fracture))]
        FourPartFractureExtraarticular = 3,

        [RadioReportId("sho_m_040405", InstanceName = nameof(BonesFindingType.Fracture))]
        NotSpecified = 4
    }
}
