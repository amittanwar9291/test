using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMRT.Domain.Enums
{
    public enum SubcutaneousTissueType : byte
    {
        None = 0,

        [RadioReportId("mam_m_040402")]
        Unremarkable = 1,

        [RadioReportId("mam_m_040403")]
        Condensed = 2
    }
}
