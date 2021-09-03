using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
	public enum GlenoidFossaType : byte
	{
		None = 0,

		[RadioReportId("tho_c_080407", InstanceName = nameof(BonesFindingType.FractureOfScapula))]
        FourteenF0Extraarticular = 1,

		[RadioReportId("tho_c_080408", InstanceName = nameof(BonesFindingType.FractureOfScapula))]
        FourteenF1SimpleArticular = 2,

		[RadioReportId("tho_c_080409", InstanceName = nameof(BonesFindingType.FractureOfScapula))]
        FourteenF2MultifragmentaryArticular = 3
    }
}
