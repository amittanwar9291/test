using RadioReport.Common.Logic.Attributes;
using RadioReport.MammaMRT.Domain.Models;

namespace RadioReport.MammaMRT.Domain.Enums.Rating
{
    public enum DateType : byte
    {
        None = 0,

        [RadioReportId("mam_m_090410", InstanceName = nameof(RatingPage.UltrasoundDateType))]
        After3Months = 1,

        [RadioReportId("mam_m_090411", InstanceName = nameof(RatingPage.UltrasoundDateType))]
        [RadioReportId("mam_m_090502", InstanceName = nameof(RatingPage.MammographyDateType))]
        [RadioReportId("mam_m_090509", InstanceName = nameof(RatingPage.MRIDateType))]
        After6Months = 2,

        [RadioReportId("mam_m_090412", InstanceName = nameof(RatingPage.UltrasoundDateType))]
        [RadioReportId("mam_m_090503", InstanceName = nameof(RatingPage.MammographyDateType))]
        [RadioReportId("mam_m_090510", InstanceName = nameof(RatingPage.MRIDateType))]
        After12Months = 3,

        [RadioReportId("mam_m_090413", InstanceName = nameof(RatingPage.UltrasoundDateType))]
        [RadioReportId("mam_m_090504", InstanceName = nameof(RatingPage.MammographyDateType))]
        [RadioReportId("mam_m_090511", InstanceName = nameof(RatingPage.MRIDateType))]
        After24Months = 4
    }
}
