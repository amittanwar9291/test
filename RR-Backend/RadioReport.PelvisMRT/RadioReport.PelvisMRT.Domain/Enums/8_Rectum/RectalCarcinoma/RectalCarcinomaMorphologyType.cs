using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Rectum
{
	public enum RectalCarcinomaMorphologyType : byte
	{
		None = 0,

		[RadioReportId("pel_m_080509", InstanceName = nameof(RectumFindingType.RectalCarcinoma))]
        Ulcerating = 1,

		[RadioReportId("pel_m_080510", InstanceName = nameof(RectumFindingType.RectalCarcinoma))]
		Polypoid = 2,

		[RadioReportId("pel_m_080511", InstanceName = nameof(RectumFindingType.RectalCarcinoma))]
		SignetRingTumor = 3
	}
}
