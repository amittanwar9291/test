using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
	public enum DisplacementOfAdiposeTissueType : byte
	{
		None = 0,

		[RadioReportId("tho_m_060319", InstanceName = nameof(PleuraFindingType.PleuralThickeningMass))]
        Outward = 1,

		[RadioReportId("tho_m_060320", InstanceName = nameof(PleuraFindingType.PleuralThickeningMass))]
		Inward = 2
	}
}
