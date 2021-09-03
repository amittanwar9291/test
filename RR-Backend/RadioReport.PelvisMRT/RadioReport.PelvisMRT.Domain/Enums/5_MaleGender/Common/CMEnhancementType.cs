using RadioReport.Common.Logic.Attributes;
using RadioReport.PelvisMRT.Domain.Models;

namespace RadioReport.PelvisMRT.Domain.Enums.MaleGender
{
	public enum CMEnhancementType : byte
	{
		None = 0,

		[RadioReportId("pel_m_050225", InstanceName = nameof(MaleGenderFinding.CMEnhancementType))]
		[RadioReportId("pel_m_050411", InstanceName = nameof(MaleGenderFinding.CMEnhancementFocalPlaquesType))]
		[RadioReportId("pel_m_050328", InstanceName = nameof(MaleGenderFinding.PenisMassCMEnhancementType))]
		[RadioReportId("pel_m_050288", InstanceName = nameof(MaleGenderFinding.TesticlesCMEnhancement))]
		[RadioReportId("pel_m_050348", InstanceName = nameof(MaleGenderFinding.EpididymisCMEnhancement))]
		[RadioReportId("pel_m_050353", InstanceName = nameof(MaleGenderFinding.SurroundingSoftTissueCMEnhancement))]
		[RadioReportId("pel_m_050453", InstanceName = nameof(MaleGenderFinding.ScrotumMassCMEnhancementType))]
		[RadioReportId("pel_m_0502136", InstanceName = nameof(MaleGenderFinding.SeminalVesiclesInfectionInflammationCmEnhancementType))]
		[RadioReportId("pel_m_050530", InstanceName = nameof(MaleGenderFinding.CMEnhancementSeminalVesiclesMassType))]
		Strong = 1,

		[RadioReportId("pel_m_050226", InstanceName = nameof(MaleGenderFinding.CMEnhancementType))]
		[RadioReportId("pel_m_050412", InstanceName = nameof(MaleGenderFinding.CMEnhancementFocalPlaquesType))]
		[RadioReportId("pel_m_050329", InstanceName = nameof(MaleGenderFinding.PenisMassCMEnhancementType))]
		[RadioReportId("pel_m_050289", InstanceName = nameof(MaleGenderFinding.TesticlesCMEnhancement))]
		[RadioReportId("pel_m_050349", InstanceName = nameof(MaleGenderFinding.EpididymisCMEnhancement))]
		[RadioReportId("pel_m_050354", InstanceName = nameof(MaleGenderFinding.SurroundingSoftTissueCMEnhancement))]
		[RadioReportId("pel_m_050454", InstanceName = nameof(MaleGenderFinding.ScrotumMassCMEnhancementType))]
		[RadioReportId("pel_m_0502137", InstanceName = nameof(MaleGenderFinding.SeminalVesiclesInfectionInflammationCmEnhancementType))]
		[RadioReportId("pel_m_050531", InstanceName = nameof(MaleGenderFinding.CMEnhancementSeminalVesiclesMassType))]
		Low = 2,

		[RadioReportId("pel_m_050227", InstanceName = nameof(MaleGenderFinding.CMEnhancementType))]
		[RadioReportId("pel_m_050413", InstanceName = nameof(MaleGenderFinding.CMEnhancementFocalPlaquesType))]
		[RadioReportId("pel_m_050330", InstanceName = nameof(MaleGenderFinding.PenisMassCMEnhancementType))]
		[RadioReportId("pel_m_050290", InstanceName = nameof(MaleGenderFinding.TesticlesCMEnhancement))]
		[RadioReportId("pel_m_050350", InstanceName = nameof(MaleGenderFinding.EpididymisCMEnhancement))]
		[RadioReportId("pel_m_050355", InstanceName = nameof(MaleGenderFinding.SurroundingSoftTissueCMEnhancement))]
		[RadioReportId("pel_m_050455", InstanceName = nameof(MaleGenderFinding.ScrotumMassCMEnhancementType))]
		[RadioReportId("pel_m_0502138", InstanceName = nameof(MaleGenderFinding.SeminalVesiclesInfectionInflammationCmEnhancementType))]
		[RadioReportId("pel_m_050532", InstanceName = nameof(MaleGenderFinding.CMEnhancementSeminalVesiclesMassType))]
		No = 3

	}
}
