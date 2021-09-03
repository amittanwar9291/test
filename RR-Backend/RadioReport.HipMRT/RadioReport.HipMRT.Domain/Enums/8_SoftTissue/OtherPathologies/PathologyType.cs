using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Domain.Enums.SoftTissue
{
    public enum PathologyType : byte
    {
        None = 0,

        [RadioReportId("hip_m_080359", InstanceName = nameof(SoftTissueFindingType.OtherPathologies))]
        IntrapelvinAscites = 1,
        
        [RadioReportId("hip_m_080360", InstanceName = nameof(SoftTissueFindingType.OtherPathologies))]
        SuspectLymphNodes = 2,
        
        [RadioReportId("hip_m_080361", InstanceName = nameof(SoftTissueFindingType.OtherPathologies))]
        NotSpecifiedIntrapelvicMassNeedOfAdditionalDiagnostics = 3
    }
}