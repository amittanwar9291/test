using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums.Bones
{
    public enum PatellaFractureBType : byte
    {
        None = 0,

        [RadioReportId("kne_m_040419", InstanceName = nameof(BonesFindingType.FracturePatella))]
        Lateral = 1,

        [RadioReportId("kne_m_040422", InstanceName = nameof(BonesFindingType.FracturePatella))]
        Medial = 2
    }
}