using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums
{
    public enum FurtherFindingsMusculatureType : byte
    {
        None = 0,

        [RadioReportId("kne_m_0802229", InstanceName = nameof(SoftPartsFindingType.Musculature))]
        FattyInfiltration = 1,

        [RadioReportId("kne_m_0802230", InstanceName = nameof(SoftPartsFindingType.Musculature))]
        MuscularHypotrophy = 2,

        [RadioReportId("kne_m_0802231", InstanceName = nameof(SoftPartsFindingType.Musculature))]
        MuscularAtrophy = 3,

        [RadioReportId("kne_m_0802234", InstanceName = nameof(SoftPartsFindingType.Musculature))]
        Apophysitis = 4,

        [RadioReportId("kne_m_0802235", InstanceName = nameof(SoftPartsFindingType.Musculature))]
        FascialLaceration = 5
    }
}
