using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
	public enum ExtensionType : byte
	{
		None = 0,

		[RadioReportId("tho_c_070262", InstanceName = nameof(SoftPartsFindingType.Pneumothorax))]
		Narrow = 1,

		[RadioReportId("tho_c_070263", InstanceName = nameof(SoftPartsFindingType.Pneumothorax))]
        Marked = 2,

		[RadioReportId("tho_c_070264", InstanceName = nameof(SoftPartsFindingType.Pneumothorax))]
		Subtotal = 3
	}
}
