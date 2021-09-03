using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bladder
{
    public enum ArteriopathyType : byte
    {
        None = 0,

        [RadioReportId("pel_m_0903202", InstanceName = nameof(BladderFindingType.VesselsUreter), CustomConditionName = nameof(AffectedVesselUreterType.AbdominalAorta))]
        [RadioReportId("pel_m_0903211", InstanceName = nameof(BladderFindingType.VesselsUreter), CustomConditionName = nameof(AffectedVesselUreterType.CommonIliacArtery))]
        [RadioReportId("pel_m_0903211", InstanceName = nameof(BladderFindingType.VesselsUreter), CustomConditionName = nameof(AffectedVesselUreterType.ExternalIliacArtery))]
        [RadioReportId("pel_m_0903211", InstanceName = nameof(BladderFindingType.VesselsUreter), CustomConditionName = nameof(AffectedVesselUreterType.InternalIliacArtery))]
        Elongation = 1,

        [RadioReportId("pel_m_0903203", InstanceName = nameof(BladderFindingType.VesselsUreter), CustomConditionName = nameof(AffectedVesselUreterType.AbdominalAorta))]
        [RadioReportId("pel_m_0903212", InstanceName = nameof(BladderFindingType.VesselsUreter), CustomConditionName = nameof(AffectedVesselUreterType.CommonIliacArtery))]
        [RadioReportId("pel_m_0903212", InstanceName = nameof(BladderFindingType.VesselsUreter), CustomConditionName = nameof(AffectedVesselUreterType.ExternalIliacArtery))]
        [RadioReportId("pel_m_0903212", InstanceName = nameof(BladderFindingType.VesselsUreter), CustomConditionName = nameof(AffectedVesselUreterType.InternalIliacArtery))]
        Aneurysm = 2
    }
}