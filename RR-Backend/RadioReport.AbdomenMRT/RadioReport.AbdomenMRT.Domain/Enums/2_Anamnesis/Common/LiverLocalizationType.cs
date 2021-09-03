using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Anamnesis
{
	public enum LiverLocalizationType : byte
	{
		None = 0,

		[RadioReportId("abd_m_020416")]
		Lobe = 1,

		[RadioReportId("abd_m_020417")]
		LiverSegments = 2
	}
}