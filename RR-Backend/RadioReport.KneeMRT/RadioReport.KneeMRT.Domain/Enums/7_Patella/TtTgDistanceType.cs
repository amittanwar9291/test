using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums
{
    public enum TtTgDistanceType : byte
    {
        None = 0,

        [RadioReportId("kne_m_070404", InstanceName = nameof(PatellaFindingType.AnatomicalVariants))]
        Normal = 1,

        [RadioReportId("kne_m_070405", InstanceName = nameof(PatellaFindingType.AnatomicalVariants))]
        Borderline = 2,

        [RadioReportId("kne_m_070406", InstanceName = nameof(PatellaFindingType.AnatomicalVariants))]
        Abnormal = 3
    }
}
