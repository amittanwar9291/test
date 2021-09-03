using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Liver
{
	public enum FocalLocalizationType : byte
	{
		None = 0,

		[RadioReportId("abd_m_040303", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
		Lobe = 1,

		[RadioReportId("abd_m_040304", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
		LiverSegments = 2
	}
}