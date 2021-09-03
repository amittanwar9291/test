using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum FractureScapulaRatingType : byte
    {
        None = 0,

        [RadioReportId("sho_m_040422", InstanceName = nameof(BonesFindingType.Fracture))]
        CoracoidProcess = 1,

        [RadioReportId("sho_m_040423", InstanceName = nameof(BonesFindingType.Fracture))]
        A14Acromion = 2,

        [RadioReportId("sho_m_040424", InstanceName = nameof(BonesFindingType.Fracture))]
        A14ScapularSpine = 3,

        [RadioReportId("sho_m_040425", InstanceName = nameof(BonesFindingType.Fracture))]
        B14TwoPartHorizontal = 4,

        [RadioReportId("sho_m_040426", InstanceName = nameof(BonesFindingType.Fracture))]
        B14TwoPartVertical = 5,

        [RadioReportId("sho_m_040427", InstanceName = nameof(BonesFindingType.Fracture))]
        B14MultifragmentaryFracture = 6,

        [RadioReportId("sho_m_040428", InstanceName = nameof(BonesFindingType.Fracture))]
        F14AnteriorRim = 7,

        [RadioReportId("sho_m_040429", InstanceName = nameof(BonesFindingType.Fracture))]
        F14PosteriorRim = 8,

        [RadioReportId("sho_m_040430", InstanceName = nameof(BonesFindingType.Fracture))]
        F14MultifragmentaryFracture = 9
    }
}
