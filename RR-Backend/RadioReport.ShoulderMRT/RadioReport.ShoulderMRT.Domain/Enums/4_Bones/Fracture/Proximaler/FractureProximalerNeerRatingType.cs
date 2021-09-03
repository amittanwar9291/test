using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum FractureProximalerNeerRatingType : byte
    {
        None = 0,

        [RadioReportId("sho_m_040406", InstanceName = nameof(BonesFindingType.Fracture))]
        NonDisplaced = 1,

        [RadioReportId("sho_m_040407", InstanceName = nameof(BonesFindingType.Fracture))]
        DisplacedAnatomicalNeck = 2,

        [RadioReportId("sho_m_040408", InstanceName = nameof(BonesFindingType.Fracture))]
        DisplacedSurgicalNeck = 3,

        [RadioReportId("sho_m_040409", InstanceName = nameof(BonesFindingType.Fracture))]
        DisplacedGreaterTubercle = 4,

        [RadioReportId("sho_m_040410", InstanceName = nameof(BonesFindingType.Fracture))]
        DisplacedLesserTubercle = 5,

        [RadioReportId("sho_m_040411", InstanceName = nameof(BonesFindingType.Fracture))]
        GlenuhumeralJointDislocation = 6
    }
}
