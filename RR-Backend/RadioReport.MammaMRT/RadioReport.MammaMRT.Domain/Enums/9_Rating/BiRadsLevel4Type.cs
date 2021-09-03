using RadioReport.Common.Logic.Attributes;
using RadioReport.MammaMRT.Domain.Models;

namespace RadioReport.MammaMRT.Domain.Enums.Rating
{
    public enum BiRadsLevel4Type : byte
    {
        None = 0,

        [RadioReportId("mam_m_090201", InstanceName = nameof(RatingPage.RightBiRadsLevel4Type))]
        [RadioReportId("mam_m_090204", InstanceName = nameof(RatingPage.LeftBiRadsLevel4Type))]
        A = 1,

        [RadioReportId("mam_m_090202", InstanceName = nameof(RatingPage.RightBiRadsLevel4Type))]
        [RadioReportId("mam_m_090205", InstanceName = nameof(RatingPage.LeftBiRadsLevel4Type))]
        B = 2,

        [RadioReportId("mam_m_090203", InstanceName = nameof(RatingPage.RightBiRadsLevel4Type))]
        [RadioReportId("mam_m_090206", InstanceName = nameof(RatingPage.LeftBiRadsLevel4Type))]
        C = 3
    }
}
