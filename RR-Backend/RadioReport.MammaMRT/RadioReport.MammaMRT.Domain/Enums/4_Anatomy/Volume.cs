using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMRT.Domain.Enums
{
    public enum Volume : byte
    {
        None = 0,
        [RadioReportId("mam_m_040104")] 
        Isomastia = 1,

        [RadioReportId("mam_m_040105")] 
        Anisomastia = 2,

        [RadioReportId("mam_m_040106")] 
        Ablatio = 3
    }
}