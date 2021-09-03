using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums.Bones
{
    public enum HorizontalFractureType : byte
    {
        None = 0,

        [RadioReportId("kne_m_040538", InstanceName = nameof(BonesFindingType.FracturePatella))]
        MiddleThird = 1,

        [RadioReportId("kne_m_040539", InstanceName = nameof(BonesFindingType.FracturePatella))]
        ProximalThird = 2,

        [RadioReportId("kne_m_040540")]
        DistalThird = 3
    }
}