using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Thyroid
{
	public enum MeasurementType : byte
	{
		None = 0,

		[RadioReportId("nec_m_070223", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation))]
		ThyroidGland = 1,

		[RadioReportId("nec_m_070224", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation))]
		SpatialNodule = 2
	}
}