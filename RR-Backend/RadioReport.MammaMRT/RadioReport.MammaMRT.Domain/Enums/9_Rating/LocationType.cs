using RadioReport.Common.Logic.Attributes;
using RadioReport.MammaMRT.Domain.Models;

namespace RadioReport.MammaMRT.Domain.Enums.Rating
{
    public enum LocationType : byte
    {
        None = 0,

        [RadioReportId("mam_m_090414", InstanceName = nameof(RatingPage.UltrasoundLocationType))]
        Focused = 1,

        [RadioReportId("mam_m_090415", InstanceName = nameof(RatingPage.UltrasoundLocationType))]
        [RadioReportId("mam_m_090505", InstanceName = nameof(RatingPage.MammographyLocationType))]
        Right = 2,

        [RadioReportId("mam_m_090416", InstanceName = nameof(RatingPage.UltrasoundLocationType))]
        [RadioReportId("mam_m_090506", InstanceName = nameof(RatingPage.MammographyLocationType))]
        Left = 3,

        [RadioReportId("mam_m_090417", InstanceName = nameof(RatingPage.UltrasoundLocationType))]
        [RadioReportId("mam_m_090507", InstanceName = nameof(RatingPage.MammographyLocationType))]
        Bilateral = 4
    }
}
