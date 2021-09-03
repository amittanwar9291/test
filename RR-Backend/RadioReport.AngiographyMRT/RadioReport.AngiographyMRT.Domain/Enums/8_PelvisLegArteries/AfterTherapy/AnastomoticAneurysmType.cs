using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyMRT.Domain.Enums.PelvisLegArteries
{
	public enum AnastomoticAneurysmType : byte
	{
		None = 0,

		[RadioReportId("ang_m_080483", InstanceName = nameof(PelvisLegArteriesFindingType.AfterTherapy))]
		Proximal = 1,

		[RadioReportId("ang_m_080484", InstanceName = nameof(PelvisLegArteriesFindingType.AfterTherapy))]
		Distal = 2
	}
}
