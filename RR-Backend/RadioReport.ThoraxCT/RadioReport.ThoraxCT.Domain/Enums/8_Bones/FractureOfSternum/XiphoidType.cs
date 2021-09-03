using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
    public enum XiphoidType : byte
    {
        None = 0,

        [RadioReportId("tho_c_0804211", InstanceName = nameof(BonesFindingType.FractureOfSternum))]
        ThreeATransverseFracture = 1,

        [RadioReportId("tho_c_0804212", InstanceName = nameof(BonesFindingType.FractureOfSternum))]
        ThreeBObliqueFracture = 2,

        [RadioReportId("tho_c_0804213", InstanceName = nameof(BonesFindingType.FractureOfSternum))]
        ThreeCMultifragmentaryFracture = 3
    }
}
