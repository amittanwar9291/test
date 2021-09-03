using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums.Bones
{
    public enum ArticularOneFractureLineType : byte
    {
        None = 0,

        [RadioReportId("kne_m_040316", InstanceName = nameof(BonesFindingType.FractureDistalFemur))]
        OneFragment = 1,

        [RadioReportId("kne_m_040317", InstanceName = nameof(BonesFindingType.FractureDistalFemur))]
        Fragmented = 2,

        [RadioReportId("kne_m_040318", InstanceName = nameof(BonesFindingType.FractureDistalFemur))]
        MultifragmentedMetaphysealFracture = 3
    }
}