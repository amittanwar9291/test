using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Rectum
{
	public enum TumorGrowthOverMuscularisType : byte
	{
		None = 0,

		[RadioReportId("pel_m_080306", InstanceName = nameof(RectumFindingType.RectalCarcinoma))]
		T3a = 1,

		[RadioReportId("pel_m_080307", InstanceName = nameof(RectumFindingType.RectalCarcinoma))]
		T3b = 2,

		[RadioReportId("pel_m_080308", InstanceName = nameof(RectumFindingType.RectalCarcinoma))]
		T3c = 3,

		[RadioReportId("pel_m_080309", InstanceName = nameof(RectumFindingType.RectalCarcinoma))]
		T3d = 4
	}
}
