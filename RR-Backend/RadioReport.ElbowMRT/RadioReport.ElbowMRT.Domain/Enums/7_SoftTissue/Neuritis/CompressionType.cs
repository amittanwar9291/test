using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums
{
	public enum CompressionType : byte
	{
		None = 0,

		[RadioReportId("elb_m_070309", InstanceName = nameof(SoftTissueFindingType.Neuritis))]
		Ganglionmass = 1,

		[RadioReportId("elb_m_070310", InstanceName = nameof(SoftTissueFindingType.Neuritis))]
		Adhesions = 2,

		[RadioReportId("elb_m_0703210", InstanceName = nameof(SoftTissueFindingType.Neuritis))]
		Osteophytes = 3,

		[RadioReportId("elb_m_0703211", InstanceName = nameof(SoftTissueFindingType.Neuritis))]
		Fracture = 4

	}
}
