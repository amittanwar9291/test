using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMX.Domain.Enums
{
    public enum BreastPainType : byte
    {
        None = 0,

        [RadioReportId("mam_mx_010507")]
        CycleDependent = 1,

        [RadioReportId("mam_mx_010508")]
        Intermittential = 2

    }
}
