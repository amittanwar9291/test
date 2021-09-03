using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Pancreas
{
	public enum PathologyType : byte
	{
		None = 0,

		[RadioReportId("abd_m_0604122")]
		Dislocation = 1,

		[RadioReportId("abd_m_0604123")]
		Stenosis = 2
	}
}
