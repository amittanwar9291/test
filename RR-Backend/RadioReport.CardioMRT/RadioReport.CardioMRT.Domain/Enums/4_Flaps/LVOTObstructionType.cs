using RadioReport.Common.Logic.Attributes;

namespace RadioReport.CardioMRT.Domain.Enums.Flaps
{
    public enum LVOTObstructionType : byte
    {
        None = 0,

        [RadioReportId("car_m_040504")]
        AtRest = 1,

        [RadioReportId("car_m_040505")]
        WithValsalva = 2
    }
}