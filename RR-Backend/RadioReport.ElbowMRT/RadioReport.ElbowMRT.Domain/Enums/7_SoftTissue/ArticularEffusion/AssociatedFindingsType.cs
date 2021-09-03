using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums
{
	public enum AssociatedFindingsType : byte
	{
		None = 0,

		[RadioReportId("elb_m_070205", InstanceName = nameof(SoftTissueFindingType.ArticularEffusion))]
		Hemarthros = 1,

		[RadioReportId("elb_m_070206", InstanceName = nameof(SoftTissueFindingType.ArticularEffusion))]
		CapsuleRupture = 2

	}
}
