using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Prostata
{
    public enum PsaVolumeType : byte
	{
		None = 0,

		[RadioReportId("pel_m_040217")]
		Unsuspicious = 1,

		[RadioReportId("pel_m_040218")]
		Noticeable = 2

	}
}
