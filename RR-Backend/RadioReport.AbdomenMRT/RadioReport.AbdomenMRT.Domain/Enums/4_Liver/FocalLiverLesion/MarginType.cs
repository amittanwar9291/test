using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Liver
{
	public enum MarginType : byte
	{
		None = 0,

		[RadioReportId("abd_m_040503", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
		Sharp = 1,

		[RadioReportId("abd_m_040504", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
		NonCircumscribed = 2
	}
}