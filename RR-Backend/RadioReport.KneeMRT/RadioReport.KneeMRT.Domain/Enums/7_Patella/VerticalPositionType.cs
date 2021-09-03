using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums
{
    public enum VerticalPositionType : byte
    {
        None = 0,

        [RadioReportId("kne_m_070206", InstanceName = nameof(PatellaFindingType.AnatomicalVariants))]
        VisualSelection = 1,

        [RadioReportId("kne_m_070210", InstanceName = nameof(PatellaFindingType.AnatomicalVariants))]
        InsallSalvatiIndex = 2
    }
}
