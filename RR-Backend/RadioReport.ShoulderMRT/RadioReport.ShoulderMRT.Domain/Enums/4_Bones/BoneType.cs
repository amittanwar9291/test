using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum BoneType : byte
    {
        None = 0,

        [RadioReportId("sho_m_040202")]
        ProximalHumerus = 1,

        [RadioReportId("sho_m_040204")]
        Clavicle = 2,

        [RadioReportId("sho_m_040206")]
        Scapula = 3,

        [RadioReportId("sho_m_040207")]
        HumeralDiaphysis = 4
    }
}
