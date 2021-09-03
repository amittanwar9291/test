using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMRT.Domain.Enums
{
    public enum ChestPainType : byte
    {
        None = 0,

        [RadioReportId("mam_m_010507")]
        DependentOnFemaleCycle = 1,

        [RadioReportId("mam_m_010508")]
        Intermittent = 2
    }
}
