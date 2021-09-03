using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums
{
	public enum HeterogenousType : byte
	{
		None = 0,

		[RadioReportId("elb_m_070414", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
		Central = 1,

		[RadioReportId("elb_m_070415", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
		Peripheral = 2

	}
}
