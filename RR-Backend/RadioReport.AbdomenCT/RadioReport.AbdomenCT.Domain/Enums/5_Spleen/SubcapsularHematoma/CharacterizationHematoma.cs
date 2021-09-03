using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenCT.Domain.Enums.Spleen
{
    public enum CharacterizationHematoma : byte
    {
        None = 0,

        [RadioReportId("abd_c_050356", InstanceName = nameof(SpleenFindingType.SubcapsularHematoma))]
        [RadioReportId("abd_c_050371", InstanceName = nameof(SpleenFindingType.Mass))]
        Acute = 1,

        [RadioReportId("abd_c_050357", InstanceName = nameof(SpleenFindingType.SubcapsularHematoma))]
        [RadioReportId("abd_c_050372", InstanceName = nameof(SpleenFindingType.Mass))]
        Subacute = 2,

        [RadioReportId("abd_c_050358", InstanceName = nameof(SpleenFindingType.SubcapsularHematoma))]
        [RadioReportId("abd_c_050373", InstanceName = nameof(SpleenFindingType.Mass))]
        Chronic = 3
    }
}