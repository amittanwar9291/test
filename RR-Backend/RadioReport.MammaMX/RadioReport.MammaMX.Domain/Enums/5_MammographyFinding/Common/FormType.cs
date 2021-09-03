using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMX.Domain.Enums.MammographyFinding
{
    public enum FormType : byte
    {
        None = 0,

        [RadioReportId("mam_mx_050309", InstanceName = nameof(MammographyFindingType.Mass))]
        [RadioReportId("mam_mx_050221", InstanceName = nameof(MammographyFindingType.SkinLesion))]
        Oval = 1,

        [RadioReportId("mam_mx_050310", InstanceName = nameof(MammographyFindingType.Mass))]
        [RadioReportId("mam_mx_050222", InstanceName = nameof(MammographyFindingType.SkinLesion))]
        Round = 2,

        [RadioReportId("mam_mx_050311", InstanceName = nameof(MammographyFindingType.Mass))]
        [RadioReportId("mam_mx_050223", InstanceName = nameof(MammographyFindingType.SkinLesion))]
        Irregular = 3
    }
}
