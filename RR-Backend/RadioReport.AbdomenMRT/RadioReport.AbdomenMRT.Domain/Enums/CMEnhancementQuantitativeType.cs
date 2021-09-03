using RadioReport.AbdomenMRT.Domain.Constants;
using RadioReport.AbdomenMRT.Domain.Enums.AdrenalGlands;
using RadioReport.AbdomenMRT.Domain.Enums.Spleen;
using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums
{
	public enum CMEnhancementQuantitativeType : byte
	{
		None = 0,

		[RadioReportId("abd_m_050316", InstanceName = nameof(InstanceNames.Spleen))]
		[RadioReportId("abd_m_080408", InstanceName = nameof(InstanceNames.AdrenalGlands))]
		[RadioReportId("abd_m_110518", InstanceName = nameof(InstanceNames.LymphaticSystem))]
		No = 1,

		[RadioReportId("abd_m_050317", InstanceName = nameof(InstanceNames.Spleen))]
		[RadioReportId("abd_m_080409", InstanceName = nameof(InstanceNames.AdrenalGlands))]
		[RadioReportId("abd_m_110519", InstanceName = nameof(InstanceNames.LymphaticSystem))]
		Low = 2,

		[RadioReportId("abd_m_050318", InstanceName = nameof(InstanceNames.Spleen))]
		[RadioReportId("abd_m_080410", InstanceName = nameof(InstanceNames.AdrenalGlands))]
		[RadioReportId("abd_m_110520", InstanceName = nameof(InstanceNames.LymphaticSystem))]
		Strong = 3
	}
}
