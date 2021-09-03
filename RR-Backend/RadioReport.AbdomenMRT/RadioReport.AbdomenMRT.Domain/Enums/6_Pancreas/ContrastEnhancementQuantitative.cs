using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Pancreas
{
    public enum ContrastEnhancementQuantitative : byte
    {
        None = 0,

        [RadioReportId("abd_m_060523", InstanceName = nameof(PancreasFindingType.Mass))]
        [RadioReportId("abd_m_060284", InstanceName = nameof(PancreasFindingType.DiffuseParenchymalChanges))]
        NoneEnhancement = 1,

        [RadioReportId("abd_m_060524", InstanceName = nameof(PancreasFindingType.Mass))]
        [RadioReportId("abd_m_060285", InstanceName = nameof(PancreasFindingType.DiffuseParenchymalChanges))]
        Low = 2,

        [RadioReportId("abd_m_060526", InstanceName = nameof(PancreasFindingType.Mass))]
        [RadioReportId("abd_m_060286", InstanceName = nameof(PancreasFindingType.DiffuseParenchymalChanges))]
        Strong = 3
    }
}