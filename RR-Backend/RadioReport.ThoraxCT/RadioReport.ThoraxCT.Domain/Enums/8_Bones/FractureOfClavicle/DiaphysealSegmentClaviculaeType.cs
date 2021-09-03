using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
    public enum DiaphysealSegmentClaviculaeType : byte
    {
        None = 0,

        [RadioReportId("tho_c_0803210", InstanceName = nameof(BonesFindingType.FractureOfClavicle))]
        Fifteen2ASimple = 1,

        [RadioReportId("tho_c_0803211", InstanceName = nameof(BonesFindingType.FractureOfClavicle))]
        Fifteen2BWedge = 2,

        [RadioReportId("tho_c_0803212", InstanceName = nameof(BonesFindingType.FractureOfClavicle))]
        Fifteen2CMultifragmentary = 3,
    }
}
