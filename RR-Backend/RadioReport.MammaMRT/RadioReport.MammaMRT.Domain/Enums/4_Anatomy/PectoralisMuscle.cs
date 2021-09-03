using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMRT.Domain.Enums
{
    public enum PectoralisMuscle : byte
    {
        None = 0,

        [RadioReportId("mam_m_040503")]
        BilaterallyCirumscribedMargin = 1,

        [RadioReportId("mam_m_040504")]
        MuscleInvasion = 2
    }
}