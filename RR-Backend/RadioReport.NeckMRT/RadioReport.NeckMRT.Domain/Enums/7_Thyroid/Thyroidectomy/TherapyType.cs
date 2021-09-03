using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Thyroid
{
	public enum TherapyType : byte
	{
		None = 0,

		[RadioReportId("nec_m_070215", InstanceName = nameof(ThyroidFindingType.Thyroidectomy))]
		Surgical = 1,

		[RadioReportId("nec_m_070216", InstanceName = nameof(ThyroidFindingType.Thyroidectomy))]
		Radioiodine = 2
	}
}