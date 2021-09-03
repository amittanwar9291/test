using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMX.Domain.Enums
{
    public enum OwnFamilyAnamnesisPresentType : byte
    {
        None = 0,

        [RadioReportId("mam_mx_020104")]
        Negative = 1,

        [RadioReportId("mam_mx_020105")]
        Positive = 2
    }
}
