using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.Vessels
{
    public enum ADCMapType : byte
    {
        None = 0,

        [RadioReportId("hea_m_040311", InstanceName = nameof(VesselsFindingType.Ischemia))]
        Increased = 1,

        [RadioReportId("hea_m_040312", InstanceName = nameof(VesselsFindingType.Ischemia))]
        Decreased = 2
    }
}
