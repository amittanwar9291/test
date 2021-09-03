using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMRT.Domain.Enums.Lymphs
{
    public enum DifferentialDiagnosisType : byte
    {
        None = 0,

        [RadioReportId("mam_m_070502")]
        Consolidation = 1,

        [RadioReportId("mam_m_070503")]
        Atelectasis = 2
    }
}
