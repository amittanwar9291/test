using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyMRT.Domain.Enums.Aorta
{
	public enum AnomaliesType : byte
	{
		None = 0,

		[RadioReportId("ang_m_060203", InstanceName = nameof(AortaFindingType.AorticAbnormalities))]
        AorticCoarctationCoA = 1,

		[RadioReportId("ang_m_060204", InstanceName = nameof(AortaFindingType.AorticAbnormalities))]
        KinkingOfTheAorticArchPseudocoarktation = 2,

		[RadioReportId("ang_m_060205", InstanceName = nameof(AortaFindingType.AorticAbnormalities))]
        CongenitalVascularRings = 3
	}
}
