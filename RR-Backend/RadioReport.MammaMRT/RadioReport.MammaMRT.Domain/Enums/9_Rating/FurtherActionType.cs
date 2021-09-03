using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMRT.Domain.Enums.Rating
{
    public enum FurtherActionType : byte
    {
        None = 0,

        [RadioReportId("mam_m_090302")]
        Biopsy = 1,

        [RadioReportId("mam_m_090303")]
        SubsequentScreening = 2,

        [RadioReportId("mam_m_090306")]
        EarlyDetectionForWomanAtHigherRisk = 3,

        [RadioReportId("mam_m_090307")]
        SubsequentScreeningAfterTreatment = 4,

        [RadioReportId("mam_m_090304")]
        MagnificationView = 5,

        [RadioReportId("mam_m_090305")]
        Checkup = 6,

        [RadioReportId("mam_m_090308")]
        Surgery = 7
    }
}
