using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Liver
{
	public enum WashInArterialPhaseType : byte
	{
		None = 0,

		[RadioReportId("abd_m_040224", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
		Homogeneous = 1,

		[RadioReportId("abd_m_040225", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
		Heterogeneous = 2
	}
}