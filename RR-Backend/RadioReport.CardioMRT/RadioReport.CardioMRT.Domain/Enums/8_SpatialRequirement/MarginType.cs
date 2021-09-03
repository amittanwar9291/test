using RadioReport.Common.Logic.Attributes;

namespace RadioReport.CardioMRT.Domain.Enums.SpatialRequirement
{
    public enum MarginType : byte
    {
        None = 0,

        [RadioReportId("car_m_080406")]
        WellDefined = 1,

        [RadioReportId("car_m_080407")]
        IllDefined = 2,

        [RadioReportId("car_m_080408")]
        Irregular = 3
    }
}
