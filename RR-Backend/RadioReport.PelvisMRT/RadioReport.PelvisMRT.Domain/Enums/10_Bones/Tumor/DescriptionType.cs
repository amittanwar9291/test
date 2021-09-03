using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bones
{
    public enum DescriptionType : byte
    {
        None = 0,

        [RadioReportId("pel_m_1001013")]
        IDescribe = 1,

        [RadioReportId("pel_m_1001014")]
        IKnow = 2
    }
}