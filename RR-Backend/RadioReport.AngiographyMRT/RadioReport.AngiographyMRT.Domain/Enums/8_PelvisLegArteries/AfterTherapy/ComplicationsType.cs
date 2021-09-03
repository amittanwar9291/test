using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyMRT.Domain.Enums.PelvisLegArteries
{
	public enum ComplicationsType : byte
	{
		None = 0,

		[RadioReportId("ang_m_080480", InstanceName = nameof(PelvisLegArteriesFindingType.AfterTherapy))]
		ReStenosis = 1,

		[RadioReportId("ang_m_080481", InstanceName = nameof(PelvisLegArteriesFindingType.AfterTherapy))]
        Occlusion = 2
	}
}
