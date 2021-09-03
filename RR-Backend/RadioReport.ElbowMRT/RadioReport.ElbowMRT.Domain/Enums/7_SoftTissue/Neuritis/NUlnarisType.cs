using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums
{
	public enum NUlnarisType : byte
	{
		None = 0,

		[RadioReportId("elb_m_070227", InstanceName = nameof(SoftTissueFindingType.Neuritis))]
		Dislocation = 1,

		[RadioReportId("elb_m_070228", InstanceName = nameof(SoftTissueFindingType.Neuritis))]
		AccessoryAnconeusEpitrochlearisMuscle = 2,

		[RadioReportId("elb_m_070229", InstanceName = nameof(SoftTissueFindingType.Neuritis))]
		RetinacularThickening = 3

	}
}
