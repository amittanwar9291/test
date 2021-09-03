using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
	public enum ShankType : byte
	{
		None = 0,

		[RadioReportId("tho_c_080413", InstanceName = nameof(BonesFindingType.FractureOfRibs))]
		TwoASimpleFracture = 1,

		[RadioReportId("tho_c_080414", InstanceName = nameof(BonesFindingType.FractureOfRibs))]
		TwoBMultifragmentaryWedgeFracture = 2,

		[RadioReportId("tho_c_080415", InstanceName = nameof(BonesFindingType.FractureOfRibs))]
        TwoCMultifragmentarySegmentalFracture = 3
    }
}
