using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums
{
    public enum TrochleadysplasiaType : byte
    {
        None = 0,

        [RadioReportId("kne_m_070308", InstanceName = nameof(PatellaFindingType.AnatomicalVariants))]
        TypeA = 1,

        [RadioReportId("kne_m_070309", InstanceName = nameof(PatellaFindingType.AnatomicalVariants))]
        TypeB = 2,

        [RadioReportId("kne_m_070310", InstanceName = nameof(PatellaFindingType.AnatomicalVariants))]
        TypeC = 3,

        [RadioReportId("kne_m_070311", InstanceName = nameof(PatellaFindingType.AnatomicalVariants))]
        TypeD = 4
    }
}
