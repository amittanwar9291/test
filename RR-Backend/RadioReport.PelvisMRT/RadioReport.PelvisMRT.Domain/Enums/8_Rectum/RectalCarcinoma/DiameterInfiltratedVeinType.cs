using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Rectum
{
	public enum DiameterInfiltratedVeinType : byte
	{
		None = 0,

		[RadioReportId("pel_m_080515", InstanceName = nameof(RectumFindingType.RectalCarcinoma))]
		Narrow = 1,

		[RadioReportId("pel_m_080516", InstanceName = nameof(RectumFindingType.RectalCarcinoma))]
		Medium = 2,

		[RadioReportId("pel_m_080517", InstanceName = nameof(RectumFindingType.RectalCarcinoma))]
		IncreasedDiameter = 3

	}
}
