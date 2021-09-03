using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums
{
    public enum InjuryType : byte
    {
        None = 0,

        [RadioReportId("kne_m_050223")]
        FreshInjury = 1,

        [RadioReportId("kne_m_050224")]
        ChronicInjury = 2
    }
}
