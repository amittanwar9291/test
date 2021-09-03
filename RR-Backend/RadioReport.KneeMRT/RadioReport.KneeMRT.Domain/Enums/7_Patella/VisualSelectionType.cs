using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums
{
    public enum VisualSelectionType : byte
    {
        None = 0,

        [RadioReportId("kne_m_070207", InstanceName = nameof(PatellaFindingType.AnatomicalVariants))]
        PatellaAlta = 1,

        [RadioReportId("kne_m_070208", InstanceName = nameof(PatellaFindingType.AnatomicalVariants))]
        PatellaBaja = 2
    }
}
