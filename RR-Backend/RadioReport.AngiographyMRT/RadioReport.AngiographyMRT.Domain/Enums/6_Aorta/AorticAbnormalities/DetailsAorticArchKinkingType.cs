using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyMRT.Domain.Enums.Aorta
{
    public enum DetailsAorticArchKinkingType : byte
    {
        None = 0,

        [RadioReportId("ang_m_060306", InstanceName = nameof(AortaFindingType.AorticAbnormalities))]
        FunctionalStenosis,

        [RadioReportId("ang_m_060307", InstanceName = nameof(AortaFindingType.AorticAbnormalities))]
        MorphologicalStenosis
    }
}
