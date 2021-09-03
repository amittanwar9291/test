using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMX.Domain.Enums.UltrasoundMammaryGlands
{
    public enum MPectoralisType : byte
    {
        None = 0,

        [RadioReportId("mam_mx_060402")]
        PectoralisMuscleBothSides = 1,

        [RadioReportId("mam_mx_060403")]
        Obscured = 2
    }
}
