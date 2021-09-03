using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum FractureBoneInjuryType: byte
    {
        None = 0,

        [RadioReportId("sho_m_040209")]
        SuspitionFrancture = 1,

        [RadioReportId("sho_m_040210")]
        ConsolidatedFracture = 2,

        [RadioReportId("sho_m_040211")]
        IncompleteFracture = 3
    }
}
