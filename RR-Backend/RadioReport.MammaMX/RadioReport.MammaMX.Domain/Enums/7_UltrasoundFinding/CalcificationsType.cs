using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMX.Domain.Enums.UltrasoundFinding
{
    public enum CalcificationsType : byte
    {
        None = 0,

        [RadioReportId("mam_mx_070219", InstanceName = nameof(UltrasoundFindingType.Calcification))]
        WithinMass = 1,

        [RadioReportId("mam_mx_070220", InstanceName = nameof(UltrasoundFindingType.Calcification))]
        OutsideOfMass = 2,

        [RadioReportId("mam_mx_070221", InstanceName = nameof(UltrasoundFindingType.Calcification))]
        IntraductalCalcifications = 3
    }
}
