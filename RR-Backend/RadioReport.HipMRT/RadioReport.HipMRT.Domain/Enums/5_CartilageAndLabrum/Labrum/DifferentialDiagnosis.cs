using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Domain.Enums
{
    public enum DifferentialDiagnosis : byte 
    {
        None = 0,

        [RadioReportId("hip_m_050502")]
        LabralPlica = 1,

        [RadioReportId("hip_m_050503")]
        FemoralNeckPlica = 2,

        [RadioReportId("hip_m_050504")]
        LigamentalPlica = 3
    }
}
