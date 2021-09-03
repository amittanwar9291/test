using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Liver
{
	public enum HistologyKnownType : byte
	{
		None = 0,

		[RadioReportId("abd_m_040206", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
		Benign = 1,

		[RadioReportId("abd_m_040207", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
		Malignant = 2
	}
}