using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum DegenerationIntensityType: byte
    {
        None = 0,

        [RadioReportId("sho_m_040223")]
        Moderately = 1,

        [RadioReportId("sho_m_040224")]
        Pronounced = 2
    }
}
