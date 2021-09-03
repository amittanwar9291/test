using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.Vessels
{
    public enum PatternType : byte
    {
        None = 0,

        [RadioReportId("hea_m_040214", InstanceName = nameof(VesselsFindingType.Ischemia))]
        Lacunary = 1,

        [RadioReportId("hea_m_040215", InstanceName = nameof(VesselsFindingType.Ischemia))]
        Territorial = 2,

        [RadioReportId("hea_m_040216", InstanceName = nameof(VesselsFindingType.Ischemia))]
        BorderZone = 3,

        [RadioReportId("hea_m_040217", InstanceName = nameof(VesselsFindingType.Ischemia))]
        Cortical = 4
    }
}
