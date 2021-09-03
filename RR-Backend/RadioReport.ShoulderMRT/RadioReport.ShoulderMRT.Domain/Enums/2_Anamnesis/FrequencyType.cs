using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum FrequencyType : byte
    {
        None = 0,

        [RadioReportId("sho_m_020107")]
        Once = 1,

        [RadioReportId("sho_m_020108")]
        MoreThanOnce = 2
    }
}
