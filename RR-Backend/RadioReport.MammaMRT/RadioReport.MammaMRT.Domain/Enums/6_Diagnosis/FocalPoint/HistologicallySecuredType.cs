using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMRT.Domain.Enums
{
    public enum HistologicallySecuredType : byte
    {
        None = 0,

        [RadioReportId("mam_m_060220")]
        Benigne = 1,

        [RadioReportId("mam_m_060221")]
        Maligne = 2
    }
}
