using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMRT.Domain.Enums
{
    public enum Artefact : byte
    {
        None = 0,

        [RadioReportId("mam_m_050202")]
        No = 1,
        Yes = 2
    }
}
