using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums
{
    public enum MedialPatellofemoralRuptureType : byte
    {
        None = 0,

        [RadioReportId("kne_m_070231", InstanceName = nameof(PatellaFindingType.RuptureMedialRetinaculum))]
        Patellar = 1,

        [RadioReportId("kne_m_070232", InstanceName = nameof(PatellaFindingType.RuptureMedialRetinaculum))]
        Midsubstance = 2,

        [RadioReportId("kne_m_070233", InstanceName = nameof(PatellaFindingType.RuptureMedialRetinaculum))]
        Femoral = 3
    }
}
