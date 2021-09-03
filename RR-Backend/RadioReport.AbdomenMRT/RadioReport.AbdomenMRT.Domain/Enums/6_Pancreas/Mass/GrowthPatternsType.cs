using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Pancreas
{
    public enum GrowthPatternsType : byte
    {
        None = 0,

        [RadioReportId("abd_m_060443", InstanceName = nameof(PancreasFindingType.Mass))]
        Displacement = 1,

        [RadioReportId("abd_m_060444", InstanceName = nameof(PancreasFindingType.Mass))]
        Infiltration = 2
    }
}