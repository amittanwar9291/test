using RadioReport.Common.Logic.Attributes;
using RadioReport.MammaMRT.Domain.Models;

namespace RadioReport.MammaMRT.Domain.Enums.Rating
{
    public enum BiRadsMultifocalType : byte
    {
        None = 0,

        [RadioReportId("mam_m_090114", InstanceName = nameof(RatingPage.RightBiRadsMultifocalType))]
        [RadioReportId("mam_m_090119", InstanceName = nameof(RatingPage.LeftBiRadsMultifocalType))]
        Yes = 1,

        [RadioReportId("mam_m_090115", InstanceName = nameof(RatingPage.RightBiRadsMultifocalType))]
        [RadioReportId("mam_m_090120", InstanceName = nameof(RatingPage.LeftBiRadsMultifocalType))]
        No = 2
    }
}
