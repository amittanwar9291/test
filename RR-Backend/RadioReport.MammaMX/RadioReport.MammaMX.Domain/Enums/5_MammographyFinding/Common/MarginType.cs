using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMX.Domain.Enums.MammographyFinding
{
    public enum MarginType : byte
    {
        None = 0,

        [RadioReportId("mam_mx_050313", InstanceName = nameof(MammographyFindingType.Mass))]
        [RadioReportId("mam_mx_050351", InstanceName = nameof(MammographyFindingType.SkinLesion))]
        Circumscribed = 1,

        [RadioReportId("mam_mx_050314", InstanceName = nameof(MammographyFindingType.Mass))]
        [RadioReportId("mam_mx_050352", InstanceName = nameof(MammographyFindingType.SkinLesion))]
        Obscured = 2,

        [RadioReportId("mam_mx_050315", InstanceName = nameof(MammographyFindingType.Mass))]
        [RadioReportId("mam_mx_050353", InstanceName = nameof(MammographyFindingType.SkinLesion))]
        Microlobulated = 3,

        [RadioReportId("mam_mx_050316", InstanceName = nameof(MammographyFindingType.Mass))]
        [RadioReportId("mam_mx_050354", InstanceName = nameof(MammographyFindingType.SkinLesion))]
        Indistinct  = 4,

        [RadioReportId("mam_mx_050317", InstanceName = nameof(MammographyFindingType.Mass))]
        [RadioReportId("mam_mx_050355", InstanceName = nameof(MammographyFindingType.SkinLesion))]
        Spiculated  = 5
    }
}
