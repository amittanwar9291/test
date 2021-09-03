using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Pancreas
{
    public enum PancreasDivisumClassificationType : byte
    {
        None = 0,

        [RadioReportId("abd_m_060302", InstanceName = nameof(PancreasFindingType.AnatomicalVariantsAnomaly))]
        Type1 = 1,

        [RadioReportId("abd_m_060303", InstanceName = nameof(PancreasFindingType.AnatomicalVariantsAnomaly))]
        Type2 = 2,

        [RadioReportId("abd_m_060304", InstanceName = nameof(PancreasFindingType.AnatomicalVariantsAnomaly))]
        Type3 = 3
    }
}