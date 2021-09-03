using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums
{
    public enum VesselsNervesLocalizationType : byte
    {
        None = 0,

        [RadioReportId("kne_m_080386")]
        NPeroneus = 1,

        [RadioReportId("kne_m_080387")]
        NTibialis = 2
    }
}
