using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums.Bones
{
    public enum BonesStageType : byte
    {
        None = 0,

        [RadioReportId("kne_m_040508", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        Acutely = 1,

        [RadioReportId("kne_m_040509", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        Chronically = 2
    }
}