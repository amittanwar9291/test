using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Summary
{
    public enum TNStagingType : byte
    {
        None = 0,

        [RadioReportId("pel_m_120402")]
        ProstateCarcinoma = 1,
        
        [RadioReportId("pel_m_120403")]
        BladderCarcinoma = 2,
        
        [RadioReportId("pel_m_120404")]
        RectalCancer = 3,
        
        [RadioReportId("pel_m_120405")]
        SigmoidColonCancer = 4
    }
}
