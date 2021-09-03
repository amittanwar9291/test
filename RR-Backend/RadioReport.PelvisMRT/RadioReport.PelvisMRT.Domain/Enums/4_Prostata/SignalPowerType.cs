using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Prostata
{
    public enum SignalPowerType : byte
	{
		None = 0,

		[RadioReportId("pel_m_040307")]
		Increase = 1,

		[RadioReportId("pel_m_040308")]
		Reduction = 2

	}
}
