using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum EndoprosthesisType : byte
    {
        None = 0,

        [RadioReportId("sho_m_020405")]
        AnatomicalShoulderProsthesis = 1,

        [RadioReportId("sho_m_020406")]
        InverseShoulderProsthesis = 2,

        [RadioReportId("sho_m_020407")]
        TotalShoulderReplacement = 3
    }
}
