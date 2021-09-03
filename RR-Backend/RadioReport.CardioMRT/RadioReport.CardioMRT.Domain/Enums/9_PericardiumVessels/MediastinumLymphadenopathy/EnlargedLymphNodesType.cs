using RadioReport.Common.Logic.Attributes;

namespace RadioReport.CardioMRT.Domain.Enums.PericardiumVessels
{
    public enum EnlargedLymphNodesType : byte
    {
        None = 0,

        [RadioReportId("car_m_090350")]
        PreservedFattyHilum = 1,

        [RadioReportId("car_m_090351")]
        Suspect = 2,

        [RadioReportId("car_m_090352")]
        Confluent = 3
    }
}
