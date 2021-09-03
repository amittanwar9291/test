using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
	public enum PleuraType : byte
	{
		None = 0,

		[RadioReportId("sho_m_080237", InstanceName = nameof(SoftPartsFindingType.Pleura))]
		PleuralEffusion = 1,

		[RadioReportId("sho_m_080238", InstanceName = nameof(SoftPartsFindingType.Pleura))]
		Thickening = 2
	}
}
