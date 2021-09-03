
using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMX.Domain.Enums.MammographyParenchymaAnatomy
{
    public enum VolumeType : byte
    {
        None = 0,

        [RadioReportId("mam_mx_040104")]
        Isomastia = 1,

        [RadioReportId("mam_mx_040105")]
        Anisomastia = 2,

        [RadioReportId("mam_mx_040106")]
        Ablatio = 3
    }
}
