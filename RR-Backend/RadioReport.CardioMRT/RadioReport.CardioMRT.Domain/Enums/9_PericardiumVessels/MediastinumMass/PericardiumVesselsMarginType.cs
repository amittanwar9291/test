using RadioReport.Common.Logic.Attributes;

namespace RadioReport.CardioMRT.Domain.Enums.PericardiumVessels
{
    public enum PericardiumVesselsMarginType : byte
    {
        None = 0,

        [RadioReportId("car_m_090338")]
        WellDefined = 1,

        [RadioReportId("car_m_090339")]
        IllDefined = 2,

        [RadioReportId("car_m_090340")]
        Infiltration = 3
    }
}
