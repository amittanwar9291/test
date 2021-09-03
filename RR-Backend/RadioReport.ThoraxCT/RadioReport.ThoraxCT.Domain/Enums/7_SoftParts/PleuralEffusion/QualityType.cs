using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
	public enum QualityType : byte
	{
		None = 0,

		[RadioReportId("tho_c_070402", InstanceName = nameof(SoftPartsFindingType.PleuralEffusion))]
        Transudate = 1,

		[RadioReportId("tho_c_070403", InstanceName = nameof(SoftPartsFindingType.PleuralEffusion))]
        Exsudate = 2,

		[RadioReportId("tho_c_070404", InstanceName = nameof(SoftPartsFindingType.PleuralEffusion))]
        Hematothorax = 3,

		[RadioReportId("tho_c_070406", InstanceName = nameof(SoftPartsFindingType.PleuralEffusion))]
        Chylothorax = 4,

		[RadioReportId("tho_c_070407", InstanceName = nameof(SoftPartsFindingType.PleuralEffusion))]
        Empyema = 5
	}
}
