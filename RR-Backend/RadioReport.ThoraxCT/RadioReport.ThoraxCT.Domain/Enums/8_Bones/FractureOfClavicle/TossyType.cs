using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
    public enum TossyType : byte
    {
        None = 0,

        [RadioReportId("tho_c_0805210", InstanceName = nameof(BonesFindingType.FractureOfClavicle))]
        Tossy1 = 1,

        [RadioReportId("tho_c_0805211", InstanceName = nameof(BonesFindingType.FractureOfClavicle))]
        Tossy2 = 2,

        [RadioReportId("tho_c_0805212", InstanceName = nameof(BonesFindingType.FractureOfClavicle))]
        Tossy3 = 3
    }
}