using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums
{
    public enum MuscularAtrophyType : byte
    {
        None = 0,

        [RadioReportId("kne_m_0802232", InstanceName = nameof(SoftPartsFindingType.Musculature))]
        Complete = 1,

        [RadioReportId("kne_m_0802233", InstanceName = nameof(SoftPartsFindingType.Musculature))]
        Partially = 2
    }
}
