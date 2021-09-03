using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMX.Domain.Enums.UltrasoundMammaryGlands
{
    public enum CutisRetractionPresence : byte
    {
        None = 0,

        [RadioReportId("mam_mx_060206")]
        No = 1,

        [RadioReportId("mam_mx_060207")]
        Yes = 2
    }
}
