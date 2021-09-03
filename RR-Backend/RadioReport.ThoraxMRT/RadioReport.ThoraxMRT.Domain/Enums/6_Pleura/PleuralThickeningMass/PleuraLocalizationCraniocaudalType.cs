using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
	public enum PleuraLocalizationCraniocaudalType : byte
	{
		None = 0,

		[RadioReportId("tho_m_060310", InstanceName = nameof(PleuraFindingType.PleuralThickeningMass))]
		Apical = 1,

		[RadioReportId("tho_m_060311", InstanceName = nameof(PleuraFindingType.PleuralThickeningMass))]
		Basal = 2
	}
}
