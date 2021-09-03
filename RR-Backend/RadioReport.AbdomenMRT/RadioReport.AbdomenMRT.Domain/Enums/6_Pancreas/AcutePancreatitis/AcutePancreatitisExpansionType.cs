using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Pancreas
{
    public enum AcutePancreatitisExpansionType : byte
    {
        None = 0,

        [RadioReportId("abd_m_060411", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        LessThanOrEqual30 = 1,

        [RadioReportId("abd_m_060412", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        Between30And50 = 2,

        [RadioReportId("abd_m_060413", InstanceName = nameof(PancreasFindingType.AcutePancreatitis))]
        MoreThan50 = 3
    }
}