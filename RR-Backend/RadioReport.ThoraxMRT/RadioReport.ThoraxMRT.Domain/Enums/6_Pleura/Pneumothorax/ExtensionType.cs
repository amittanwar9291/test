using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
	public enum ExtensionType : byte
	{
		None = 0,

		[RadioReportId("tho_m_060243", InstanceName = nameof(PleuraFindingType.Pneumothorax))]
		Small = 1,

		[RadioReportId("tho_m_060244", InstanceName = nameof(PleuraFindingType.Pneumothorax))]
        Large = 2,

		[RadioReportId("tho_m_060245", InstanceName = nameof(PleuraFindingType.Pneumothorax))]
		Subtotal = 3
	}
}
