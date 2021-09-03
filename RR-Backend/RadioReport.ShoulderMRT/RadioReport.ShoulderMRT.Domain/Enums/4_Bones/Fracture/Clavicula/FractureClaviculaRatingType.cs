using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum FractureClaviculaRatingType : byte
    {
        None = 0,

        [RadioReportId("sho_m_040414", InstanceName = nameof(BonesFindingType.Fracture))]
        ExtraarticularFxEpiphysealInjury = 1,

        [RadioReportId("sho_m_040415", InstanceName = nameof(BonesFindingType.Fracture))]
        PartialArticular = 2,

        [RadioReportId("sho_m_040416", InstanceName = nameof(BonesFindingType.Fracture))]
        ArticularFracture = 3,

        [RadioReportId("sho_m_040417", InstanceName = nameof(BonesFindingType.Fracture))]
        SimpleFracture = 4,

        [RadioReportId("sho_m_040418", InstanceName = nameof(BonesFindingType.Fracture))]
        WedgeFracture = 5,

        [RadioReportId("sho_m_040419", InstanceName = nameof(BonesFindingType.Fracture))]
        MultifragmentaryFracture = 6,

        [RadioReportId("sho_m_040420", InstanceName = nameof(BonesFindingType.Fracture))]
        Extraarticular = 7,

        [RadioReportId("sho_m_040421", InstanceName = nameof(BonesFindingType.Fracture))]
        Intraarticular = 8
    }
}
