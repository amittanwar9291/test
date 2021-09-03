using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bladder
{
    public enum SideType : byte
    {
        None = 0,

        [RadioReportId("pel_m_0903208", InstanceName = nameof(BladderFindingType.VesselsUreter), CustomConditionName = nameof(AffectedVesselUreterType.CommonIliacArtery))]
        [RadioReportId("pel_m_0903208", InstanceName = nameof(BladderFindingType.VesselsUreter), CustomConditionName = nameof(AffectedVesselUreterType.ExternalIliacArtery))]
        [RadioReportId("pel_m_0903208", InstanceName = nameof(BladderFindingType.VesselsUreter), CustomConditionName = nameof(AffectedVesselUreterType.InternalIliacArtery))]
        [RadioReportId("pel_m_0903221", InstanceName = nameof(BladderFindingType.VesselsUreter), CustomConditionName = nameof(AffectedVesselUreterType.CommonIliacVein))]
        [RadioReportId("pel_m_0903224", InstanceName = nameof(BladderFindingType.VesselsUreter), CustomConditionName = nameof(AffectedVesselUreterType.ExternalIliacVein))]
        [RadioReportId("pel_m_0903227", InstanceName = nameof(BladderFindingType.VesselsUreter), CustomConditionName = nameof(AffectedVesselUreterType.Ureter))]
        [RadioReportId("pel_m_0902211", InstanceName = nameof(BladderFindingType.Muscles))]
        [RadioReportId("pel_m_0902139", InstanceName = nameof(BladderFindingType.Tendons))]
        Right = 1,

        [RadioReportId("pel_m_0903209", InstanceName = nameof(BladderFindingType.VesselsUreter), CustomConditionName = nameof(AffectedVesselUreterType.CommonIliacArtery))]
        [RadioReportId("pel_m_0903209", InstanceName = nameof(BladderFindingType.VesselsUreter), CustomConditionName = nameof(AffectedVesselUreterType.ExternalIliacArtery))]
        [RadioReportId("pel_m_0903209", InstanceName = nameof(BladderFindingType.VesselsUreter), CustomConditionName = nameof(AffectedVesselUreterType.InternalIliacArtery))]
        [RadioReportId("pel_m_0903222", InstanceName = nameof(BladderFindingType.VesselsUreter), CustomConditionName = nameof(AffectedVesselUreterType.CommonIliacVein))]
        [RadioReportId("pel_m_0903225", InstanceName = nameof(BladderFindingType.VesselsUreter), CustomConditionName = nameof(AffectedVesselUreterType.ExternalIliacVein))]
        [RadioReportId("pel_m_0903228", InstanceName = nameof(BladderFindingType.VesselsUreter), CustomConditionName = nameof(AffectedVesselUreterType.Ureter))]
        [RadioReportId("pel_m_0902212", InstanceName = nameof(BladderFindingType.Muscles))]
        [RadioReportId("pel_m_0902140", InstanceName = nameof(BladderFindingType.Tendons))]
        Left = 2
    }
}