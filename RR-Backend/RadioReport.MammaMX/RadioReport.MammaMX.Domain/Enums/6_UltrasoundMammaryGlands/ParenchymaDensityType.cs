using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMX.Domain.Enums.UltrasoundMammaryGlands
{
    public enum ParenchymaDensityType : byte
    {
        None = 0,

        [RadioReportId("mam_mx_060502")]
        HomogeneousFattyEchoSignal = 1,

        [RadioReportId("mam_mx_060503")]
        HomogeneousFibroglandularEchoSignal = 2,

        [RadioReportId("mam_mx_060504")]
        HeterogeneousEchoSignal = 3
    }
}
