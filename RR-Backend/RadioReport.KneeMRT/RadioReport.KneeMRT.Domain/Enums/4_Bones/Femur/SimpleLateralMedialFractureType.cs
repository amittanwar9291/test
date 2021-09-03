using RadioReport.Common.Logic.Attributes;
using RadioReport.KneeMRT.Domain.Models;

namespace RadioReport.KneeMRT.Domain.Enums.Bones
{
    public enum SimpleLateralMedialFractureType : byte
    {
        None = 0,

        [RadioReportId("kne_m_040311", InstanceName = nameof(BonesFinding.SimpleLateralFractureType))]
        [RadioReportId("kne_m_040402", InstanceName = nameof(BonesFinding.SimpleMedialFractureType))]
        FractureLineEndingInNodge = 1,

        [RadioReportId("kne_m_040312", InstanceName = nameof(BonesFinding.SimpleLateralFractureType))]
        [RadioReportId("kne_m_040403", InstanceName = nameof(BonesFinding.SimpleMedialFractureType))]
        FractureLineEndingInCondyle = 2,

        [RadioReportId("kne_m_040313", InstanceName = nameof(BonesFinding.SimpleLateralFractureType))]
        [RadioReportId("kne_m_040404", InstanceName = nameof(BonesFinding.SimpleMedialFractureType))]
        Fragmented = 3
    }
}