using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Rectum
{
	public enum LocalizationAxialType : byte
	{
		None = 0,

		[RadioReportId("pel_m_080403", InstanceName = nameof(RectumFindingType.RectalCarcinoma))]
		Circular = 1,

		[RadioReportId("pel_m_080404", InstanceName = nameof(RectumFindingType.RectalCarcinoma))]
        LocationAccordingToSsl = 2

	}
}
