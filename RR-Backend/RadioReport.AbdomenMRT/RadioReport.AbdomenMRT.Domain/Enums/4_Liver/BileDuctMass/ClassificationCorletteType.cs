using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Liver
{
	public enum ClassificationCorletteType : byte
	{
		None = 0,

		[RadioReportId("abd_m_040489", InstanceName = nameof(LiverFindingType.BileDuctMass))]
		Type1 = 1,

		[RadioReportId("abd_m_040490", InstanceName = nameof(LiverFindingType.BileDuctMass))]
		Type2 = 2,

		[RadioReportId("abd_m_040491", InstanceName = nameof(LiverFindingType.BileDuctMass))]
		Type3A = 3,

		[RadioReportId("abd_m_040492", InstanceName = nameof(LiverFindingType.BileDuctMass))]
		Type3B = 4,

		[RadioReportId("abd_m_040493", InstanceName = nameof(LiverFindingType.BileDuctMass))]
		Type4A = 5,

		[RadioReportId("abd_m_040494", InstanceName = nameof(LiverFindingType.BileDuctMass))]
		Type4B = 6
	}
}