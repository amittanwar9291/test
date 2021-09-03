using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
	public enum PleuralMassType : byte
	{
		None = 0,

		[RadioReportId("tho_c_070419", InstanceName = nameof(SoftPartsFindingType.PleuralMass))]
        Solitaire = 1,

		[RadioReportId("tho_c_070420", InstanceName = nameof(SoftPartsFindingType.PleuralMass))]
        Multilobulated = 2,

		[RadioReportId("tho_c_070421", InstanceName = nameof(SoftPartsFindingType.PleuralMass))]
        Pedunculated = 3
	}
}
