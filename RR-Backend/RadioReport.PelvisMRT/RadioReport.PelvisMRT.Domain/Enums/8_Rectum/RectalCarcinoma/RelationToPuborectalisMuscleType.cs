using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Rectum
{
	public enum RelationToPuborectalisMuscleType : byte
	{
		None = 0,

		[RadioReportId("pel_m_080303", InstanceName = nameof(RectumFindingType.RectalCarcinoma))]
        Above = 1,

		[RadioReportId("pel_m_0803124", InstanceName = nameof(RectumFindingType.RectalCarcinoma))]
        Below = 2
	}
}
