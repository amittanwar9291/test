using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum AnamnesisDetailsType : byte
    {
        None = 0,

        [RadioReportId("sho_m_020110")]
        Ventral = 1,

        [RadioReportId("sho_m_020111")]
        VentralSubluxation = 2,

        [RadioReportId("sho_m_020112")]
        Dorsal = 3,

        [RadioReportId("sho_m_020113")]
        DorsalSubluxation = 4
    }
}
