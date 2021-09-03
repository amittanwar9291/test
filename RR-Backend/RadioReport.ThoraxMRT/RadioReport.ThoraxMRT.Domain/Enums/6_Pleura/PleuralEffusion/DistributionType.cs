using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
	public enum DistributionType : byte
	{
		None = 0,

		[RadioReportId("tho_m_060305", InstanceName = nameof(PleuraFindingType.PleuralEffusion))]
        FreeFlow = 1,

		[RadioReportId("tho_m_060306", InstanceName = nameof(PleuraFindingType.PleuralEffusion))]
        Interlobal = 2
	}
}
