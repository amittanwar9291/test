using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.LymphNodes
{
    public enum FormType : byte
    {
        None = 0,

        [RadioReportId("pel_m_110302")]
        Oval = 1,
        
        [RadioReportId("pel_m_110303")]
        Round = 2,

        [RadioReportId("pel_m_110308")]
        Commended = 3
    }
}
