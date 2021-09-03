using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Thyroid
{
	public enum ThyroidectomyType : byte
	{
		None = 0,

		[RadioReportId("nec_m_070207", InstanceName = nameof(ThyroidFindingType.Thyroidectomy))]
		StatusPostCompleteThyroidectomy = 1,

		[RadioReportId("nec_m_070209", InstanceName = nameof(ThyroidFindingType.Thyroidectomy))]
		StatusPostSubtotalThyroidectomy = 2,

		[RadioReportId("nec_m_070210", InstanceName = nameof(ThyroidFindingType.Thyroidectomy))]
		StatusPostHemithyroidectomy = 3
	}
}