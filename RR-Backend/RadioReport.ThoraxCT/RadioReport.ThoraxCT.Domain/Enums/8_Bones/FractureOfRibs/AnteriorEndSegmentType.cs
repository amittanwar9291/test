using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
	public enum AnteriorEndSegmentType : byte
	{
		None = 0,

		[RadioReportId("tho_c_080417", InstanceName = nameof(BonesFindingType.FractureOfRibs))]
		ThreeASimpleFracture = 1,

		[RadioReportId("tho_c_080418", InstanceName = nameof(BonesFindingType.FractureOfRibs))]
		ThreeBWedgeFracture = 2,

		[RadioReportId("tho_c_080419", InstanceName = nameof(BonesFindingType.FractureOfRibs))]
        ThreeCMultifragmentaryFracture = 3
    }
}
