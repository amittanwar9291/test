using RadioReport.Common.Logic.Attributes;

namespace RadioReport.CardioMRT.Domain.Enums.PericardiumVessels
{
    public enum EnlargedAbdLymphNodesType : byte
    {
        None = 0,

        [RadioReportId("car_m_090558")]
        PreservedFattyHilum = 1,

        [RadioReportId("car_m_090559")]
        Suspect = 2,

        [RadioReportId("car_m_090560")]
        Confluent = 3
    }
}
