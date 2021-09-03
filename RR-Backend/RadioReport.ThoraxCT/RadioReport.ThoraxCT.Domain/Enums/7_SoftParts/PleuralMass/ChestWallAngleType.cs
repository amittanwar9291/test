using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
	public enum ChestWallAngleType : byte
	{
		None = 0,

		[RadioReportId("tho_c_070413", InstanceName = nameof(SoftPartsFindingType.PleuralMass))]
        Obtuse = 1,

		[RadioReportId("tho_c_070414", InstanceName = nameof(SoftPartsFindingType.PleuralMass))]
        Acute = 2
	}
}
