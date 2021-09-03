using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMX.Domain.Enums
{
    public enum MXMammaType : byte
    {
        None = 0,

        [RadioReportId("mam_mx_010113")]
        BaselineExamination = 1,

        [RadioReportId("mam_mx_010114")]
        FollowUpExamination = 2
    }
}
