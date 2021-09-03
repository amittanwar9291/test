using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Liver
{
	public enum TopographyConcrementsType : byte
	{
		None = 0,

		[RadioReportId("abd_m_040268", InstanceName = nameof(LiverFindingType.GallbladderStone))]
		Cholelithiasis = 1,

		[RadioReportId("abd_m_040269", InstanceName = nameof(LiverFindingType.GallbladderStone))]
		Cholecystolithiasis = 2,

		[RadioReportId("abd_m_040270", InstanceName = nameof(LiverFindingType.GallbladderStone))]
		Choledocholithiasis = 3
	}
}