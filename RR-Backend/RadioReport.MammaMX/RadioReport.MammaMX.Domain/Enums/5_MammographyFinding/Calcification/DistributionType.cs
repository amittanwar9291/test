using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMX.Domain.Enums.MammographyFinding
{
    public enum DistributionType : byte
    {
        None = 0,

        [RadioReportId("mam_mx_050322", InstanceName = nameof(MammographyFindingType.Calcification))]
        Diffuse = 1,

        [RadioReportId("mam_mx_050323", InstanceName = nameof(MammographyFindingType.Calcification))]
        Regional = 2,

        [RadioReportId("mam_mx_050324", InstanceName = nameof(MammographyFindingType.Calcification))]
        Grouped = 3,

        [RadioReportId("mam_mx_050325", InstanceName = nameof(MammographyFindingType.Calcification))]
        Linear = 4,

        [RadioReportId("mam_mx_050326", InstanceName = nameof(MammographyFindingType.Calcification))]
        Segmental = 5
    }
}
