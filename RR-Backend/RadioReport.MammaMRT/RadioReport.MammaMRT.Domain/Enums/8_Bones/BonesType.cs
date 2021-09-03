using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMRT.Domain.Enums
{
    public enum BonesType:byte
    {
        None = 0,

        [RadioReportId("mam_m_080104")]
        Unremarkable = 1,

        [RadioReportId("mam_m_080105")]
        BoneLesion = 2
    }
}
