using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums.Bones
{
    public enum FemurArticularType : byte
    {
        None = 0,

        [RadioReportId("kne_m_040314", InstanceName = nameof(BonesFindingType.FractureDistalFemur))]
        ShapedFractureLowDosage = 1,

        [RadioReportId("kne_m_040315", InstanceName = nameof(BonesFindingType.FractureDistalFemur))]
        ArticularOneFractureLine = 2,

        [RadioReportId("kne_m_040409", InstanceName = nameof(BonesFindingType.FractureDistalFemur))]
        ArticularMultipleFractureLines = 3
    }
}