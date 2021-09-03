using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Domain.Enums
{
	public enum GrowthPatternsType : byte
	{
		None = 0,

		[RadioReportId("hip_m_060219")]
		Diffuse = 1,

		[RadioReportId("hip_m_060220")]
		Focal = 2

	}
}
