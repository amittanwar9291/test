using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
	public enum ScapulaFractureType : byte
	{
		None = 0,

		[RadioReportId("tho_c_080313", InstanceName = nameof(BonesFindingType.FractureOfScapula))]
        FourteenAProcess = 1,

		[RadioReportId("tho_c_080317", InstanceName = nameof(BonesFindingType.FractureOfScapula))]
        FourteenBBody = 2,

		[RadioReportId("tho_c_080406", InstanceName = nameof(BonesFindingType.FractureOfScapula))]
        FourteenFGlenoidFossa = 3,

		[RadioReportId("tho_c_080410", InstanceName = nameof(BonesFindingType.FractureOfScapula))]
        FourteenNotFurtherSpecified = 4
    }
}
