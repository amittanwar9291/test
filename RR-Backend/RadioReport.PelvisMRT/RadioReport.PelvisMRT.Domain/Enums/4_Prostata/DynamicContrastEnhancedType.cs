using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Prostata
{
    public enum DynamicContrastEnhancedType : byte
	{
		None = 0,

		[RadioReportId("pel_m_040226")]
		DceMrtNegative = 1,

		[RadioReportId("pel_m_040230")]
		DceMrtPositive = 2,

	}
}
