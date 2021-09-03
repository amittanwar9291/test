using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMRT.Domain.Enums
{
    public enum SiliconeImplant : byte
    {
        None = 0,

        [RadioReportId("mam_m_050302")]
        No = 1,

        [RadioReportId("mam_m_050303")]
        IntactBilateralImplants = 2
    }
}
