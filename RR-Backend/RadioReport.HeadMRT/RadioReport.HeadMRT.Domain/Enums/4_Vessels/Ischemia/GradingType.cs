using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.Vessels
{
    public enum GradingType : byte
    {
        None = 0,

        [RadioReportId("hea_m_040322", InstanceName = nameof(VesselsFindingType.Ischemia))]
        No = 1,

        [RadioReportId("hea_m_040323", InstanceName = nameof(VesselsFindingType.Ischemia))]
        Low = 2,

        [RadioReportId("hea_m_040324", InstanceName = nameof(VesselsFindingType.Ischemia))]
        Moderate = 3,

        [RadioReportId("hea_m_040325", InstanceName = nameof(VesselsFindingType.Ischemia))]
        Pronounced = 4
    }
}
