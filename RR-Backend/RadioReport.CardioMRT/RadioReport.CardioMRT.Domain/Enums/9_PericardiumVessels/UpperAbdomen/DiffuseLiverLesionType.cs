using RadioReport.Common.Logic.Attributes;

namespace RadioReport.CardioMRT.Domain.Enums.PericardiumVessels
{
    public enum DiffuseLiverLesionType : byte
    {
        None = 0,

        [RadioReportId("car_m_0902196")]
        Hemosiderosis = 1,

        [RadioReportId("car_m_0902197")]
        Steatosis = 2,

        [RadioReportId("car_m_0902198")]
        Cirrhosis = 3
    }
}
