using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMRT.Domain.Enums.Rating
{
    public enum BiopsyLocalizationType : byte
    {
        None = 0,

        [RadioReportId("mam_m_090405")]
        BreastRight = 1,

        [RadioReportId("mam_m_090406")]
        BreastLeft = 2,

        [RadioReportId("mam_m_090407")]
        LymphNodesRight = 3,

        [RadioReportId("mam_m_090408")]
        LymphNodesLeft = 4
    }
}
