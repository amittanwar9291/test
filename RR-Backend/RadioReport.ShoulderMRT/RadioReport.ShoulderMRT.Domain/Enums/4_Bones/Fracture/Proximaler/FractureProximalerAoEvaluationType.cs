using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum FractureProximalerAoEvaluationType : byte
    {
        None = 0,

        [RadioReportId("sho_m_040502", InstanceName = nameof(BonesFindingType.Fracture))]
        GreaterTubercleFracture = 1,

        [RadioReportId("sho_m_040503", InstanceName = nameof(BonesFindingType.Fracture))]
        LesserTubercleFracture = 2,

        [RadioReportId("sho_m_040504", InstanceName = nameof(BonesFindingType.Fracture))]
        SurgicalNeckFracture = 3,

        [RadioReportId("sho_m_040505", InstanceName = nameof(BonesFindingType.Fracture))]
        WithGreaterTubercleFracture = 4,

        [RadioReportId("sho_m_040506", InstanceName = nameof(BonesFindingType.Fracture))]
        WithLesserTubercleFracture = 5,

        [RadioReportId("sho_m_040507", InstanceName = nameof(BonesFindingType.Fracture))]
        OtherBifocalFracture = 6,

        [RadioReportId("sho_m_040508", InstanceName = nameof(BonesFindingType.Fracture))]
        AnatomicalNeckFracture = 7,

        [RadioReportId("sho_m_040509", InstanceName = nameof(BonesFindingType.Fracture))]
        AnatomicalNeckFractureGreaterTubercleAvulsion = 8,

        [RadioReportId("sho_m_040510", InstanceName = nameof(BonesFindingType.Fracture))]
        MultifragmentaryFracture = 9
    }
}