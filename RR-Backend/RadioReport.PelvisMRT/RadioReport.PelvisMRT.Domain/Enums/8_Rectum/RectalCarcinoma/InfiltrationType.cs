using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Rectum
{
	public enum InfiltrationType : byte
	{
		None = 0,

		[RadioReportId("pel_m_080311", InstanceName = nameof(RectumFindingType.RectalCarcinoma))]
		T4a = 1,

		[RadioReportId("pel_m_080312", InstanceName = nameof(RectumFindingType.RectalCarcinoma))]
		T4b = 2

	}
}
