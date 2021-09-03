using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum TherapyType : byte
    {
        None = 0,

        [RadioReportId("sho_m_020115")]
        SpontaneousReduction = 1,

        [RadioReportId("sho_m_020116")]
        NonSurgicalReduction = 2
    }
}
