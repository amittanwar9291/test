using RadioReport.Common.Logic.Attributes;

namespace RadioReport.CardioMRT.Domain.Enums.LeftVentricle
{
    public enum PerfusionType : byte
    {
        None = 0,

        [RadioReportId("car_m_0603101")]
        NoDefect = 1,

        [RadioReportId("car_m_0603102")]
        Defect = 2
    }
}
