using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Thyroid
{
	public enum ShapeType : byte
	{
		None = 0,

		[RadioReportId("nec_m_070477", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		Round = 1,

		[RadioReportId("nec_m_070478", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		Lobulated = 2,

		[RadioReportId("nec_m_070479", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		Irregular = 3
	}
}