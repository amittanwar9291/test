using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyMRT.Domain.Enums.Anamnesis
{
	public enum AfterTransplantationType : byte
	{
		None = 0,

		[RadioReportId("ang_m_020307")]
		Kidney = 1,

		[RadioReportId("ang_m_020308")]
		Liver = 2
	}
}
