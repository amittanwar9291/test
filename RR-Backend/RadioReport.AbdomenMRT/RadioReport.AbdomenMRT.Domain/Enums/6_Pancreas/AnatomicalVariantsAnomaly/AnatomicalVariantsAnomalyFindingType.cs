using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Pancreas
{
    public enum AnatomicalVariantsAnomalyFindingType : byte
    {
        None = 0,

        [RadioReportId("abd_m_060203", InstanceName = nameof(PancreasFindingType.AnatomicalVariantsAnomaly))]
        PancreasDivisum = 1,

        [RadioReportId("abd_m_060204", InstanceName = nameof(PancreasFindingType.AnatomicalVariantsAnomaly))]
        PancreasAnulare = 2
    }
}