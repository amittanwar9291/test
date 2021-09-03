using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMX.Domain.Enums.MammographyFinding
{
    public enum AsymmetryType : byte
    {
        None = 0,

        [RadioReportId("mam_mx_050340", InstanceName = nameof(MammographyFindingType.Asymmetry))]
        Asymmetry = 1,

        [RadioReportId("mam_mx_050341", InstanceName = nameof(MammographyFindingType.Asymmetry))]
        GlobalAsymmetry = 2,

        [RadioReportId("mam_mx_050342", InstanceName = nameof(MammographyFindingType.Asymmetry))]
        FocalAsymmetry = 3,

        [RadioReportId("mam_mx_050343", InstanceName = nameof(MammographyFindingType.Asymmetry))]
        DevelopingAsymmetry = 4
    }
}
