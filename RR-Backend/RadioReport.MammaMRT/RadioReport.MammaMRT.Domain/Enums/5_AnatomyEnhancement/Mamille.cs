using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMRT.Domain.Enums
{
    public enum Mamille : byte
    {
        None = 0,

        [RadioReportId("mam_m_050402")]
        BilateralUnremarkable = 1
    }
}
