using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Pancreas
{
	public enum HistologyKnownType : byte
	{
		None = 0,

		[RadioReportId("abd_m_060255")]
		Benign = 1,

		[RadioReportId("abd_m_060256")]
		Malignant = 2

	}
}
