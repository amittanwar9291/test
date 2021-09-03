using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Summary
{
    public enum ProcedureType : byte
    {
        None = 0,

        [RadioReportId("pel_m_120106")]
        ComplementaryCrossSectionalImaging = 1,


        [RadioReportId("pel_m_120104")]
        MriFollowUp = 2
    }
}
