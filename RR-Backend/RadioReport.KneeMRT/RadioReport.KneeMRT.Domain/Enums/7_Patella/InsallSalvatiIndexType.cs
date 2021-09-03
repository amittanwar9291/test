using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums
{
    public enum InsallSalvatiIndexType : byte
    {
        None = 0,

        [RadioReportId("kne_m_070214", InstanceName = nameof(PatellaFindingType.AnatomicalVariants))]
        PatellaAlta = 1,

        [RadioReportId("kne_m_070215", InstanceName = nameof(PatellaFindingType.AnatomicalVariants))]
        NoPathologicalFinding = 2,

        [RadioReportId("kne_m_070216", InstanceName = nameof(PatellaFindingType.AnatomicalVariants))]
        PatellaBaja = 3
    }
}
