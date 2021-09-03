using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
    public enum BodySternumType : byte
    {
        None = 0,

        [RadioReportId("tho_c_0803224", InstanceName = nameof(BonesFindingType.FractureOfSternum))]
        TwoATransverseFracture = 1,

        [RadioReportId("tho_c_0803225", InstanceName = nameof(BonesFindingType.FractureOfSternum))]
        TwoBObliqueFracture = 2,

        [RadioReportId("tho_c_0803226", InstanceName = nameof(BonesFindingType.FractureOfSternum))]
        TwoCMultifragmentaryFracture = 3
    }
}
