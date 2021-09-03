using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums
{
	public enum DemarcationType : byte
	{
		None = 0,

		[RadioReportId("elb_m_070403", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
		WellDefined = 1,

		[RadioReportId("elb_m_070404", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
		Illdefined = 2
	}
}
