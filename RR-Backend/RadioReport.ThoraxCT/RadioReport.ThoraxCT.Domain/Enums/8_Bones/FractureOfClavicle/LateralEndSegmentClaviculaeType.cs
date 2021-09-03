using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
    public enum LateralEndSegmentClaviculaeType : byte
    {
        None = 0,

        [RadioReportId("tho_c_0804202", InstanceName = nameof(BonesFindingType.FractureOfClavicle))]
        Fifteen3AExtraarticular = 1,

        [RadioReportId("tho_c_0804203", InstanceName = nameof(BonesFindingType.FractureOfClavicle))]
        Fifteen3BPartialArticular = 2,

        [RadioReportId("tho_c_0804234", InstanceName = nameof(BonesFindingType.FractureOfClavicle))]
        Fifteen3CCompleteArticular = 3,
    }
}
