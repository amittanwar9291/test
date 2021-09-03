using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyMRT.Domain.Enums.PelvisLegArteries
{
	public enum PathologySubType : byte
	{
		None = 0,

		[RadioReportId("ang_m_080350", InstanceName = nameof(PelvisLegArteriesFindingType.NonArterioscleroticPAVK))]
		TypeI = 1,

		[RadioReportId("ang_m_080351", InstanceName = nameof(PelvisLegArteriesFindingType.NonArterioscleroticPAVK))]
		TypeII = 2,

		[RadioReportId("ang_m_080352", InstanceName = nameof(PelvisLegArteriesFindingType.NonArterioscleroticPAVK))]
		TypeIII = 3,

		[RadioReportId("ang_m_080353", InstanceName = nameof(PelvisLegArteriesFindingType.NonArterioscleroticPAVK))]
		TypeIV = 4,

		[RadioReportId("ang_m_080354", InstanceName = nameof(PelvisLegArteriesFindingType.NonArterioscleroticPAVK))]
		TypeVI = 5
	}
}
