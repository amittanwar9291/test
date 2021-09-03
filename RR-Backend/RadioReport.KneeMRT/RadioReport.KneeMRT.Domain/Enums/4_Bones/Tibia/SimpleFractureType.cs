using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums.Bones
{
    public enum SimpleFractureType : byte
    {
        None = 0,

        [RadioReportId("kne_m_040303", InstanceName = nameof(BonesFindingType.FractureDistalFemur))]
        AvulsionFracture = 1,

        [RadioReportId("kne_m_040304", InstanceName = nameof(BonesFindingType.FractureDistalFemur))]
        ObliqueSpiralFracture = 2,

        [RadioReportId("kne_m_040305", InstanceName = nameof(BonesFindingType.FractureDistalFemur))]
        TransverseFracture = 3
    }
}