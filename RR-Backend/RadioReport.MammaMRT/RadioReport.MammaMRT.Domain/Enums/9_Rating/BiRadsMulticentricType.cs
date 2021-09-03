using RadioReport.Common.Logic.Attributes;
using RadioReport.MammaMRT.Domain.Models;

namespace RadioReport.MammaMRT.Domain.Enums.Rating
{
    public enum BiRadsMulticentricType : byte
    {
        None = 0,

        [RadioReportId("mam_m_090117", InstanceName = nameof(RatingPage.RightBiRadsMulticentricType))]
        [RadioReportId("mam_m_090121", InstanceName = nameof(RatingPage.LeftBiRadsMulticentricType))]
        Yes = 1,

        [RadioReportId("mam_m_090118", InstanceName = nameof(RatingPage.RightBiRadsMulticentricType))]
        [RadioReportId("mam_m_090122", InstanceName = nameof(RatingPage.LeftBiRadsMulticentricType))]
        No = 2
    }
}
