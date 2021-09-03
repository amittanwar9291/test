using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums.SoftTissue
{
	public enum HematomaCharacterizationType : byte
	{
		None = 0,

		[RadioReportId("elb_m_0704202", InstanceName = nameof(SoftTissueFindingType.Hematoma))]
		Hyperacute = 1,

		[RadioReportId("elb_m_0704203", InstanceName = nameof(SoftTissueFindingType.Hematoma))]
		Acute = 2,

		[RadioReportId("elb_m_0704204", InstanceName = nameof(SoftTissueFindingType.Hematoma))]
		Subacute = 3,

		[RadioReportId("elb_m_0704205", InstanceName = nameof(SoftTissueFindingType.Hematoma))]
		ChronicOrganized = 4

	}
}
