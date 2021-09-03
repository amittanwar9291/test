using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyMRT.Domain.Enums.PelvisLegArteries
{
	public enum StenosisType : byte
	{
		None = 0,

		[RadioReportId("ang_m_080357", InstanceName = nameof(PelvisLegArteriesFindingType.NonArterioscleroticPAVK))]
		HourglassSign = 1,

		[RadioReportId("ang_m_080358", InstanceName = nameof(PelvisLegArteriesFindingType.NonArterioscleroticPAVK))]
        ScimitarSign = 2
	}
}
