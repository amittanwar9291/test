using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.MaleGender
{
    public enum DescriptionType : byte
    {
        None = 0,

        [RadioReportId("pel_m_050112")]
        IKnow = 1,

        [RadioReportId("pel_m_050111")]
        IDescribe = 2
    }
}
