using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMX.Domain.Enums.UltrasoundMammaryGlands
{
    public enum CutisType : byte
    {
        None = 0,

        [RadioReportId("mam_mx_060104")]
        NotThickened = 1,

        [RadioReportId("mam_mx_060105")]
        Thickened = 2
    }
}
