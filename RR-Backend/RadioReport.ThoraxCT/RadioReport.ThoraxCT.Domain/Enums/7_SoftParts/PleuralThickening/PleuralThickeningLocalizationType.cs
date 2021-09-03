using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
	public enum PleuralThickeningLocalizationType : byte
	{
		None = 0,

		[RadioReportId("tho_c_070348", InstanceName = nameof(SoftPartsFindingType.PleuralThickening))]
		Diffuse = 1,

		[RadioReportId("tho_c_070338", InstanceName = nameof(SoftPartsFindingType.PleuralThickening))]
        Focal = 2
	}
}
