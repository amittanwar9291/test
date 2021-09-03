using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums.Bones
{
    public enum PatellaFractureCType : byte
    {
        None = 0,

        [RadioReportId("kne_m_040537", InstanceName = nameof(BonesFindingType.FracturePatella))]
        HorizontalFractureOneFragment = 1,

        [RadioReportId("kne_m_040541", InstanceName = nameof(BonesFindingType.FracturePatella))]
        HorizontalFractureTwofragmentWithWedgeShape = 2,

        [RadioReportId("kne_m_040542", InstanceName = nameof(BonesFindingType.FracturePatella))]
        Multifragmentary = 3
    }

}