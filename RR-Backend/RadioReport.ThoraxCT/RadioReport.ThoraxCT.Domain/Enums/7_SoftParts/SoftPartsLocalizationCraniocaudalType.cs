using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
	public enum SoftPartsLocalizationCraniocaudalType : byte
	{
		None = 0,

		[RadioReportId("tho_c_070215", InstanceName = nameof(SoftPartsFindingType.PleuralMass))]
		[RadioReportId("tho_c_070340", InstanceName = nameof(SoftPartsFindingType.PleuralThickening))]
		Apical = 1,

		[RadioReportId("tho_c_070216", InstanceName = nameof(SoftPartsFindingType.PleuralMass))]
		[RadioReportId("tho_c_070341", InstanceName = nameof(SoftPartsFindingType.PleuralThickening))]
		Basal = 2
	}
}
