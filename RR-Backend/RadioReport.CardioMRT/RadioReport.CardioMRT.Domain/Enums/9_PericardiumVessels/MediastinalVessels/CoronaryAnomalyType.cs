using RadioReport.Common.Logic.Attributes;

namespace RadioReport.CardioMRT.Domain.Enums.PericardiumVessels
{
    public enum  CoronaryAnomalyType : byte
    {
        None = 0,

        [RadioReportId("car_m_090302")]
        Origin = 1,

        [RadioReportId("car_m_090303")]
        Distal = 2,
    }
}
