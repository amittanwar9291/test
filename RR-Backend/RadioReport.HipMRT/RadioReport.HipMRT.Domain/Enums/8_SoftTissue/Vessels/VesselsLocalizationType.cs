using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Domain.Enums.SoftTissue
{
    public enum VesselsLocalizationType : byte
    {
        None = 0,

        [RadioReportId("hip_m_080412", InstanceName = nameof(SoftTissueFindingType.Vessels))]
        CommonIliacArtery = 1,
        
        [RadioReportId("hip_m_080413", InstanceName = nameof(SoftTissueFindingType.Vessels))]
        ExternalIliacArtery = 2,
        
        [RadioReportId("hip_m_080414", InstanceName = nameof(SoftTissueFindingType.Vessels))]
        InternalIliacArtery = 3,
        
        [RadioReportId("hip_m_080415", InstanceName = nameof(SoftTissueFindingType.Vessels))]
        CommonFemoralArtery = 4
    }
}