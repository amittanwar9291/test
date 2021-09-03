using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenCT.Domain.Enums.Spleen
{
    public enum ModifiedSpleenInjuryScaleType : byte
    {
        
        None = 0,

        [RadioReportId("abd_c_050428", InstanceName = nameof(SpleenFindingType.Trauma))]
        One = 1,

        [RadioReportId("abd_c_050429", InstanceName = nameof(SpleenFindingType.Trauma))]
        Two = 2,

        [RadioReportId("abd_c_050430", InstanceName = nameof(SpleenFindingType.Trauma))]
        Three = 3,
        
        [RadioReportId("abd_c_050431", InstanceName = nameof(SpleenFindingType.Trauma))]
        Four = 4,

        [RadioReportId("abd_c_050432", InstanceName = nameof(SpleenFindingType.Trauma))]
        Five = 5
    }
}