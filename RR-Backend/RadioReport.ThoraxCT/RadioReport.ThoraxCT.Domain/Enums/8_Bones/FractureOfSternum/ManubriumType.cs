
using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
    public enum ManubriumType : byte
    {
        None = 0,

        [RadioReportId("tho_c_0803219", InstanceName = nameof(BonesFindingType.FractureOfSternum))]
        OneATransverseFracture = 1,

        [RadioReportId("tho_c_0803220", InstanceName = nameof(BonesFindingType.FractureOfSternum))]
        OneBObliqueFracture = 2,

        [RadioReportId("tho_c_0803221", InstanceName = nameof(BonesFindingType.FractureOfSternum))]
        OneCMultifragmentaryFracture = 3
    }
}
