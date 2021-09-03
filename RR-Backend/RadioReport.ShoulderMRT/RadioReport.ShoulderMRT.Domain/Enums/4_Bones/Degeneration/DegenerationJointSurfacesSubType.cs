using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum DegenerationJointSurfacesSubType:byte
    {
        None = 0,

        [RadioReportId("sho_m_040441")]
        HumeralHead = 1,

        [RadioReportId("sho_m_040442")]
        Glenoid = 2
    }
}
