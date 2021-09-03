using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Liver
{
	public enum DetailsStoneType : byte
	{
		None = 0,

		[RadioReportId("abd_m_040444", InstanceName = nameof(LiverFindingType.GallbladderStone))]
		GallbladderSludge = 1,

		[RadioReportId("abd_m_040445", InstanceName = nameof(LiverFindingType.GallbladderStone))]
		SolitaryCalculus = 2,

		[RadioReportId("abd_m_040446", InstanceName = nameof(LiverFindingType.GallbladderStone))]
		MultipleStones = 3
	}
}