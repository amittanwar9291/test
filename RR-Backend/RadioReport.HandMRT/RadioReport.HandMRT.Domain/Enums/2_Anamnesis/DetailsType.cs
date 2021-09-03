using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HandMRT.Domain.Enums.Anamnesis
{
	public enum DetailsType : byte
	{
		None = 0,


        [RadioReportId("han_m_020206", InstanceName = nameof(IndicationType.Fracture))]
        [RadioReportId("han_m_020215", InstanceName = nameof(IndicationType.LesionOfTendonsLigaments))]
        [RadioReportId("han_m_020224", InstanceName = nameof(IndicationType.TendovaginitisTendinitis))]
        [RadioReportId("han_m_020224", InstanceName = nameof(IndicationType.LunateNecrosis))]
        [RadioReportId("han_m_020224", InstanceName = nameof(IndicationType.ScaphoidPseudarthrosis))]
        [RadioReportId("han_m_020224", InstanceName = nameof(IndicationType.Arthrosis))]
        [RadioReportId("han_m_020224", InstanceName = nameof(IndicationType.RheumaticDisease))]
        [RadioReportId("han_m_020224", InstanceName = nameof(IndicationType.BoneTumor))]
        [RadioReportId("han_m_020224", InstanceName = nameof(IndicationType.SoftTissueTumor))]
        [RadioReportId("han_m_020224", InstanceName = nameof(IndicationType.NerveCompressionSyndrome))]
        SuspicionOf = 1,


        [RadioReportId("han_m_020207", InstanceName = nameof(IndicationType.Fracture))]
        [RadioReportId("han_m_020216", InstanceName = nameof(IndicationType.LesionOfTendonsLigaments))]
        [RadioReportId("han_m_020225", InstanceName = nameof(IndicationType.TendovaginitisTendinitis))]
        [RadioReportId("han_m_020225", InstanceName = nameof(IndicationType.LunateNecrosis))]
        [RadioReportId("han_m_020225", InstanceName = nameof(IndicationType.ScaphoidPseudarthrosis))]
        [RadioReportId("han_m_020225", InstanceName = nameof(IndicationType.Arthrosis))]
        [RadioReportId("han_m_020225", InstanceName = nameof(IndicationType.RheumaticDisease))]
        [RadioReportId("han_m_020225", InstanceName = nameof(IndicationType.BoneTumor))]
        [RadioReportId("han_m_020225", InstanceName = nameof(IndicationType.SoftTissueTumor))]
        [RadioReportId("han_m_020225", InstanceName = nameof(IndicationType.NerveCompressionSyndrome))]
        Exclusion = 2
	}
}
