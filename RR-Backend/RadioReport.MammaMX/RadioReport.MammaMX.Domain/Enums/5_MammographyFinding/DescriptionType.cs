using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMX.Domain.Enums.MammographyFinding
{
    public enum DescriptionType : byte
    {
        None = 0,

        [RadioReportId("mam_mx_050111", InstanceName = nameof(MammographyFindingType.Mass))]
        IDescribe = 1,

        [RadioReportId("mam_mx_050112", InstanceName = nameof(MammographyFindingType.Mass))]
        IKnow = 2
    }
}
