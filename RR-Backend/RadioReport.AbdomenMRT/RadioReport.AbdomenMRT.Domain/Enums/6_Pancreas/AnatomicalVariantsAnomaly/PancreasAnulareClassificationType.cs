using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Pancreas
{
    public enum PancreasAnulareClassificationType : byte
    {
        None = 0,

        [RadioReportId("abd_m_060305", InstanceName = nameof(PancreasFindingType.AnatomicalVariantsAnomaly))]
        Complete = 1,

        [RadioReportId("abd_m_060306", InstanceName = nameof(PancreasFindingType.AnatomicalVariantsAnomaly))]
        Incomplete = 2
    }
}