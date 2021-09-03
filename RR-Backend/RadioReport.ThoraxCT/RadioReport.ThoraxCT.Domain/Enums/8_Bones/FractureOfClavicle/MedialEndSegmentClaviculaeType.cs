using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
    public enum MedialEndSegmentClaviculaeType : byte
    {
        None = 0,

        [RadioReportId("tho_c_0803205", InstanceName = nameof(BonesFindingType.FractureOfClavicle))]
        Fifteen1AExtraarticular = 1,

        [RadioReportId("tho_c_0803206", InstanceName = nameof(BonesFindingType.FractureOfClavicle))]
        Fifteen1BPartialArticular = 2,

        [RadioReportId("tho_c_0803207", InstanceName = nameof(BonesFindingType.FractureOfClavicle))]
        Fifteen1CCompleteArticular = 3,
    }
}
