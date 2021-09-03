using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyMRT.Domain.Enums.PelvisLegArteries
{
	public enum CollectionWithoutContrastEnhancementType : byte
	{
		None = 0,

		[RadioReportId("ang_m_080536", InstanceName = nameof(PelvisLegArteriesFindingType.AfterTherapy))]
		Lymphocele = 1,

		[RadioReportId("ang_m_080537", InstanceName = nameof(PelvisLegArteriesFindingType.AfterTherapy))]
		Seroma = 2
	}
}
