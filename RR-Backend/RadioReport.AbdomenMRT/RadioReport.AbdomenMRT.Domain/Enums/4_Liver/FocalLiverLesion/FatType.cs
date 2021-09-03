using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Liver
{
	public enum FatType : byte
	{
		None = 0,

		[RadioReportId("abd_m_040418", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
		Macroscopic = 1,

		[RadioReportId("abd_m_040419", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
		Microscopic = 2
	}
}