using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.FemaleGender
{
    public enum DescriptionType : byte
    {
        None = 0,

        [RadioReportId("pel_m_060111")]
        IDescribe = 1,

        [RadioReportId("pel_m_060112")]
        IKnow = 2
    }
}
