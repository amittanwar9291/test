using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Bones
{
	public enum AxialDeviationType : byte
	{
		None = 0,

		[RadioReportId("nec_m_100211", InstanceName = nameof(BonesFindingType.AxisDeviation))]
		Kyphosis = 1,

		[RadioReportId("nec_m_100210", InstanceName = nameof(BonesFindingType.AxisDeviation))]
		Straightening = 2,

		[RadioReportId("nec_m_100209", InstanceName = nameof(BonesFindingType.AxisDeviation))]
		Hyperlordosis = 3

	}
}
