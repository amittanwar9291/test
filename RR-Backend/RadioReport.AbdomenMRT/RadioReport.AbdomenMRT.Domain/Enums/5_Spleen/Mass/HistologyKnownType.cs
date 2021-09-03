using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Spleen
{
    public enum HistologyKnownType : byte
    {
        None = 0,

        [RadioReportId("abd_m_050220", InstanceName = nameof(SpleenFindingType.Mass))]
        Benign = 1,

        [RadioReportId("abd_m_050221", InstanceName = nameof(SpleenFindingType.Mass))]
        Malignant = 2
    }
}  