using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Thyroid
{
	public enum TotalVolumeType : byte
	{
		None = 0,

		[RadioReportId("nec_m_070402", InstanceName = nameof(ThyroidFindingType.Thyroidectomy))]
		[RadioReportId("nec_m_070411", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation))]
		AutomaticCalculation = 1,
		
		[RadioReportId("nec_m_070405", InstanceName = nameof(ThyroidFindingType.Thyroidectomy))]
		[RadioReportId("nec_m_070414", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation))]
		ThreeDimensionalVolumetry = 2
	}
}