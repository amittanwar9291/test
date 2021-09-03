using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums
{
	public enum AneurysmLocalizationType : byte
	{
		None = 0,

		[RadioReportId("elb_m_070234", InstanceName = nameof(SoftTissueFindingType.Aneurysm))]
		ABrachialis = 1,

		[RadioReportId("elb_m_070235", InstanceName = nameof(SoftTissueFindingType.Aneurysm))]
		ARadialis = 2,

		[RadioReportId("elb_m_070236", InstanceName = nameof(SoftTissueFindingType.Aneurysm))]
		AUlnaris = 3

	}
}
