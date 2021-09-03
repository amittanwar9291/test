using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMX.Domain.Enums.MammographyFinding
{
    public enum DensityType : byte
    {
        None = 0,

        [RadioReportId("mam_mx_050402", InstanceName = nameof(MammographyFindingType.Mass))]
        [RadioReportId("mam_mx_050357", InstanceName = nameof(MammographyFindingType.SkinLesion))]
        HigherThanSurroundingParenchyma = 1,

        [RadioReportId("mam_mx_050403", InstanceName = nameof(MammographyFindingType.Mass))]
        [RadioReportId("mam_mx_050358", InstanceName = nameof(MammographyFindingType.SkinLesion))]
        EquivalentToParenchyma = 2,

        [RadioReportId("mam_mx_050404", InstanceName = nameof(MammographyFindingType.Mass))]
        [RadioReportId("mam_mx_050359", InstanceName = nameof(MammographyFindingType.SkinLesion))]
        LessThanSurroundingParenchyma = 3,

        [RadioReportId("mam_mx_050405", InstanceName = nameof(MammographyFindingType.Mass))]
        [RadioReportId("mam_mx_050360", InstanceName = nameof(MammographyFindingType.SkinLesion))]
        FatEquivalent = 4
    }
}
