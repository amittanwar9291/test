using RadioReport.Common.Logic.Attributes;

namespace RadioReport.CardioMRT.Domain.Enums.PericardiumVessels
{
    public enum LungPathologyType : byte
    {
        None = 0,

        [RadioReportId("car_m_0902180")]
        Consolidation = 1,

        [RadioReportId("car_m_0902181")]
        PleuralEffusion = 2,

        [RadioReportId("car_m_0902182")]
        Atelectasis = 3,

        [RadioReportId("car_m_0902183")]
        PulmonaryNodule = 4,

        [RadioReportId("car_m_0902184")]
        Mass = 5,

        [RadioReportId("car_m_0902185")]
        Pneumothorax = 6

    }
}
