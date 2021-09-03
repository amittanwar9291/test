using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums.Bones
{
    public enum FemurPartiallyArticularType : byte
    {
        None = 0,

        [RadioReportId("kne_m_040310", InstanceName = nameof(BonesFindingType.FractureDistalFemur))]
        SimpleFractureLateral = 1,

        [RadioReportId("kne_m_040401", InstanceName = nameof(BonesFindingType.FractureDistalFemur))]
        SimpleMedialFracture = 2,

        [RadioReportId("kne_m_040405", InstanceName = nameof(BonesFindingType.FractureDistalFemur))]
        CoronaryFracture = 3
    }
}