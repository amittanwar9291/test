using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
	public enum VolumeType : byte
	{
		None = 0,

		[RadioReportId("tho_c_070293", InstanceName = nameof(SoftPartsFindingType.Mamma))]
		Anisomasty = 1,

		[RadioReportId("tho_c_070297", InstanceName = nameof(SoftPartsFindingType.Mamma))]
		Ablatio = 2,

		[RadioReportId("tho_c_0702150", InstanceName = nameof(SoftPartsFindingType.Mamma))]
        BreastAugmentation = 3
	}
}
