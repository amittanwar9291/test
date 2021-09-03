using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.Cortex
{
	public enum DepthType : byte
	{
		None = 0,

		[RadioReportId("hea_m_060212")]
		Cortex = 1,

		[RadioReportId("hea_m_060213")]
		WhiteMatter = 2
	}
}
