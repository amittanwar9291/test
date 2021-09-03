using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMX.Domain.Enums.MammographyFinding
{
    public enum HistologicallySecuredType : byte
    {
        None = 0,

        [RadioReportId("mam_mx_050205", InstanceName = nameof(MammographyFindingType.Mass))]
        Benign = 1,

        [RadioReportId("mam_mx_050206", InstanceName = nameof(MammographyFindingType.Mass))]
        Malignant = 2
    }
}
