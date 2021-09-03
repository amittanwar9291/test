using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Thyroid
{
	public enum ComplicationsType : byte
	{
		None = 0,

		[RadioReportId("nec_m_070502", InstanceName = nameof(ThyroidFindingType.Thyroidectomy))]
		Seroma = 1,

		[RadioReportId("nec_m_070503", InstanceName = nameof(ThyroidFindingType.Thyroidectomy))]
		Hemorrhage = 2,

		[RadioReportId("nec_m_070504", InstanceName = nameof(ThyroidFindingType.Thyroidectomy))]
		Inflammation = 3
	}
}