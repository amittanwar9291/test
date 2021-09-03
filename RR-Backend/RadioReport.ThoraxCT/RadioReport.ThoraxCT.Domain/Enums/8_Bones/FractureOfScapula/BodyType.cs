using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
	public enum BodyType : byte
	{
		None = 0,

		[RadioReportId("tho_c_080318", InstanceName = nameof(BonesFindingType.FractureOfScapula))]
        FourteenB1ExitsTheBodyAt2OrLessPoints = 1,

		[RadioReportId("tho_c_080319", InstanceName = nameof(BonesFindingType.FractureOfScapula))]
        FourteenB2ExitsTheBodyAt3OrMorePoints = 2
    }
}
