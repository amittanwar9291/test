using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Liver
{
	public enum FormType : byte
	{
		None = 0,

		[RadioReportId("abd_m_040509", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
		Round = 1,

		[RadioReportId("abd_m_040510", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
		Oval = 2,

		[RadioReportId("abd_m_040511", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
		Multilobulated = 3,

		[RadioReportId("abd_m_040512", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
		Irregular = 4
	}
}