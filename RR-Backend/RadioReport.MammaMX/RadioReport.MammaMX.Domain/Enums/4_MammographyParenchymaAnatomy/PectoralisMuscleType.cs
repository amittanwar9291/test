
using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMX.Domain.Enums.MammographyParenchymaAnatomy
{
    public enum PectoralisMuscleType : byte
    {
        None = 0,

        [RadioReportId("mam_mx_040503")]
        BilateralNormalImaging = 1,

        [RadioReportId("mam_mx_040504")]
        Obscured = 2
    }
}
