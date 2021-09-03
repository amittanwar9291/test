using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyMRT.Domain.Enums.PelvisLegArteries
{
	public enum PeriprostheticFluidCollectionType : byte
	{
		None = 0,

		[RadioReportId("ang_m_080533", InstanceName = nameof(PelvisLegArteriesFindingType.AfterTherapy))]
        WithContrastEnhancement = 1,

		[RadioReportId("ang_m_080535", InstanceName = nameof(PelvisLegArteriesFindingType.AfterTherapy))]
        WithoutContrastEnhancement = 2
	}
}
