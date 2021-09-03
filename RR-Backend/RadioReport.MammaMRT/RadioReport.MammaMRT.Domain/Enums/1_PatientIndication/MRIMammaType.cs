using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMRT.Domain.Enums
{
    public enum MRIMammaType : byte
    {
        None = 0,

        [RadioReportId("mam_m_010113")]
        BaselineExamination = 1,

        [RadioReportId("mam_m_010114")]
        FollowUpExamination = 2
    }
}
