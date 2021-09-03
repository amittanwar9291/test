using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum InstabilityType : byte
    {
        None = 0,

        [RadioReportId("sho_m_020504")]
        Anterior = 1,

        [RadioReportId("sho_m_020505")]
        Posterior = 2
    }
}
