using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMRT.Domain.Enums
{
    public enum OwnFamilyAnamnesisPresentType : byte
    {
        None = 0,

        [RadioReportId("mam_m_020104")]
        Negative = 1,

        [RadioReportId("mam_m_020105")]
        Positive = 2
    }
}
