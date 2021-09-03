using RadioReport.Common.Logic.Attributes;

namespace RadioReport.CardioMRT.Domain.Enums.PericardiumVessels
{
    public enum UpperAbdomenSide : byte
    {
        None = 0,

        [RadioReportId("car_m_090371")]
        Right = 1,

        [RadioReportId("car_m_090372")]
        Left = 2
    }
}
