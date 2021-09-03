using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Thyroid
{
	public enum GrowthType : byte
	{
		None = 0,

		[RadioReportId("nec_m_070419", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation))]
		AsymmetryAccentuationRight = 1,

		[RadioReportId("nec_m_070420", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation))]
		AsymmetryAccentuationLeft = 2,

		[RadioReportId("nec_m_070421", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation))]
		Retrosternal = 3
	}
}