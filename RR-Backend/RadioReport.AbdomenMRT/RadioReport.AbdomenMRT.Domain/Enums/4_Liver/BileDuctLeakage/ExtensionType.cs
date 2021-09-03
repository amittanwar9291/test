using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Liver
{
	public enum ExtensionType : byte
	{
		None = 0,

		[RadioReportId("abd_m_0402121", InstanceName = nameof(LiverFindingType.BileDuctLeakage))]
		ShortSegment = 1,

		[RadioReportId("abd_m_0402122", InstanceName = nameof(LiverFindingType.BileDuctLeakage))]
		LongSegment = 2
	}
}