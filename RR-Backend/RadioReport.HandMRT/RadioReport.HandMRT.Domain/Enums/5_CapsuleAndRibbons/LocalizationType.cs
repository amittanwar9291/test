using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HandMRT.Domain.Enums.CapsuleAndRibbons
{
	public enum LocalizationType : byte
	{
		None = 0,

		[RadioReportId("han_m_050217", InstanceName = nameof(CapsuleAndRibbonsFindingType.BandLesionsOfTheFingers))]
		D1 = 1,

		[RadioReportId("han_m_050218", InstanceName = nameof(CapsuleAndRibbonsFindingType.BandLesionsOfTheFingers))]
		D2 = 2,

		[RadioReportId("han_m_050219", InstanceName = nameof(CapsuleAndRibbonsFindingType.BandLesionsOfTheFingers))]
		D3 = 3,

		[RadioReportId("han_m_050220", InstanceName = nameof(CapsuleAndRibbonsFindingType.BandLesionsOfTheFingers))]
		D4 = 4,

		[RadioReportId("han_m_050221", InstanceName = nameof(CapsuleAndRibbonsFindingType.BandLesionsOfTheFingers))]
		D5 = 5

	}
}
