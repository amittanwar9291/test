using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMRT.Domain.Enums.Lymphs
{
    public enum FocalLiverLesionType : byte
    {
        None = 0,

        [RadioReportId("mam_m_070306")]
        Benign = 1,

        [RadioReportId("mam_m_070309")]
        Malignant = 2,

        [RadioReportId("mam_m_070310")]
        UnknownDignity = 3
    }
}
