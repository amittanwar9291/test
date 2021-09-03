using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyMRT.Domain.Enums.PelvisLegArteries
{
	public enum ClassificationAccordingToTASCIIType : byte
	{
		None = 0,

		[RadioReportId("ang_m_080209", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        ChronicAortoiliac = 1,

		[RadioReportId("ang_m_080210", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        ChronicFemoropopliteal = 2,

		[RadioReportId("ang_m_080211", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        ChronicCruroPedal = 3
	}
}
