using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMRT.Domain.Enums
{
    public enum LevelParenchymalesSide:byte
    {
        None = 0,

        [RadioReportId("mam_m_050502-2")]
        Symmetric = 1,

        [RadioReportId("mam_m_050503-2")]
        Asymmetric = 2
    }
}
