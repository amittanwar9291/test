using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMRT.Domain.Enums
{
    public enum DescriptionType : byte
    {
        None = 0,

        [RadioReportId("mam_m_060109")]
        IDescribe = 1,

        [RadioReportId("mam_m_060110")]
        IKnow = 2
    }
}
