using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMRT.Domain.Enums.Rating
{
    public enum BiopsyModalityType : byte
    {
        None = 0,

        [RadioReportId("mam_m_090401")]
        Ultrasound = 1,

        [RadioReportId("mam_m_090402")]
        Mammography = 2,

        [RadioReportId("mam_m_090403")]
        MRI = 3
    }
}



