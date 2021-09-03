using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums.Bones
{
    public enum FemurExtraarticularType : byte
    {
        None = 0,

        [RadioReportId("kne_m_040302", InstanceName = nameof(BonesFindingType.FractureDistalFemur))]
        SimpleFracture = 1,

        [RadioReportId("kne_m_040306", InstanceName = nameof(BonesFindingType.FractureDistalFemur))]
        WedgeFracture = 2,

        [RadioReportId("kne_m_040309", InstanceName = nameof(BonesFindingType.FractureDistalFemur))]
        Multifragmentary = 3
    }
}