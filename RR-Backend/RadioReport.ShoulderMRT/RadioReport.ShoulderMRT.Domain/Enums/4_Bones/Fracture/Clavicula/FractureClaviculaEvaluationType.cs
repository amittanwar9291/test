using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum FractureClaviculaEvaluationType : byte
    {
        None = 0,

        [RadioReportId("sho_m_040308", InstanceName = nameof(BonesFindingType.Fracture))]
        SternalEndSegment = 1,

        [RadioReportId("sho_m_040310", InstanceName = nameof(BonesFindingType.Fracture))]
        BodySegment = 2,

        [RadioReportId("sho_m_040311", InstanceName = nameof(BonesFindingType.Fracture))]
        AcromialEndSegment = 3,

        [RadioReportId("sho_m_040312", InstanceName = nameof(BonesFindingType.Fracture))]
        NotSpecified = 4
    }
}
