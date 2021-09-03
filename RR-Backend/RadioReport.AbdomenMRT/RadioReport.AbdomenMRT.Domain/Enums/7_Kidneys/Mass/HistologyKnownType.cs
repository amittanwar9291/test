using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Kidneys
{
	public enum HistologyKnownType : byte
	{
		None = 0,

		[RadioReportId("abd_m_070232", InstanceName = nameof(KidneysFindingType.Mass))]
		Benign = 1,

		[RadioReportId("abd_m_070233", InstanceName = nameof(KidneysFindingType.Mass))]
		Malignant = 2
	}
}