using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums.Bones
{
    public enum CoronaryFractureType : byte
    {
        None = 0,

        [RadioReportId("kne_m_040406", InstanceName = nameof(BonesFindingType.FractureDistalFemur))]
        AnteriorLateralFlakeFracture = 1,

        [RadioReportId("kne_m_040407", InstanceName = nameof(BonesFindingType.FractureDistalFemur))]
        PosteriorUnicondylar = 2,

        [RadioReportId("kne_m_040408", InstanceName = nameof(BonesFindingType.FractureDistalFemur))]
        PosteriorBicondylar = 3
    }
}