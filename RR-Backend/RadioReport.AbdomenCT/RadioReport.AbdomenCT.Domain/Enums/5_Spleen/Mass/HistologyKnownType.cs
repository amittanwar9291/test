using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenCT.Domain.Enums.Spleen
{
    public enum HistologyKnownType : byte
    {
        None = 0,

        [RadioReportId("abd_c_050220", InstanceName = nameof(SpleenFindingType.Mass))]
        Benign = 1,

        [RadioReportId("abd_c_050221", InstanceName = nameof(SpleenFindingType.Mass))]
        Malignant = 2
    }
}  