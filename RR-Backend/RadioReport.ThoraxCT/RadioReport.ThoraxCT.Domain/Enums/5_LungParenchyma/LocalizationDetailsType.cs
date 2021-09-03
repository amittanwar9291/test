using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
	public enum LocalizationDetailsType : byte
	{
		None = 0,

		[RadioReportId("tho_c_050303", InstanceName = nameof(LungParenchymaFindingType.Nodule))]
        PleuralBased = 1,

		[RadioReportId("tho_c_050304", InstanceName = nameof(LungParenchymaFindingType.Nodule))]
		Subpleural = 2,

		[RadioReportId("tho_c_050305", InstanceName = nameof(LungParenchymaFindingType.Nodule))]
        Parenchymatous = 3,

		[RadioReportId("tho_c_050306", InstanceName = nameof(LungParenchymaFindingType.Nodule))]
        AtTheMajorOrObliqueFissure = 4,

		[RadioReportId("tho_c_050307", InstanceName = nameof(LungParenchymaFindingType.Nodule))]
        AtTheMinorOrHorizontalFissure = 5
	}
}
