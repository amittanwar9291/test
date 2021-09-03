using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums
{
	public enum NeuritisLocalizationType : byte
	{
		None = 0,

		[RadioReportId("elb_m_070224", InstanceName = nameof(SoftTissueFindingType.Neuritis))]
		UlnarNerve = 1,

		[RadioReportId("elb_m_070225", InstanceName = nameof(SoftTissueFindingType.Neuritis))]
		RadialNerve = 2,

		[RadioReportId("elb_m_070226", InstanceName = nameof(SoftTissueFindingType.Neuritis))]
		MedianNerve = 3

	}
}
