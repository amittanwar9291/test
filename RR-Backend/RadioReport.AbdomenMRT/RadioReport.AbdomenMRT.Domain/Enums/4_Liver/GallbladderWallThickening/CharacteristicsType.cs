using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Liver
{
	public enum CharacteristicsType : byte
	{
		None = 0,

		[RadioReportId("abd_m_040277", InstanceName = nameof(LiverFindingType.GallbladderWallThickening))]
		Focal = 1,

		[RadioReportId("abd_m_040278", InstanceName = nameof(LiverFindingType.GallbladderWallThickening))]
		Diffuse = 2
	}
}