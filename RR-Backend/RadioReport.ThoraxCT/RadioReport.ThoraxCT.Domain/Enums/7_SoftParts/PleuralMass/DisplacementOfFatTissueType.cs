using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
	public enum DisplacementOfFatTissueType : byte
	{
		None = 0,

		[RadioReportId("tho_c_070416", InstanceName = nameof(SoftPartsFindingType.PleuralMass))]
        Outwards = 1,

		[RadioReportId("tho_c_070417", InstanceName = nameof(SoftPartsFindingType.PleuralMass))]
		Inwards = 2
	}
}
