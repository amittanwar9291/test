using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Domain.Enums
{
    public enum CartilageTransplantationType : byte
    {
        None = 0,

        [RadioReportId("hip_m_020313")]
        Amic = 1,

        [RadioReportId("hip_m_020314")]
        Act = 2
    }
}
