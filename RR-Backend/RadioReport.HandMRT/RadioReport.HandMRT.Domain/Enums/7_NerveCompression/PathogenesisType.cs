using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HandMRT.Domain.Enums
{
	public enum PathogenesisType : byte
	{
		None = 0,

		[RadioReportId("han_m_070302", InstanceName = nameof(NerveCompressionFindingType.CarpalTunnelSyndrome))]
        [RadioReportId("han_m_070310", InstanceName = nameof(NerveCompressionFindingType.UlnarTunnelSyndrome))]
        ChronicallyIdiopatic = 1,

		[RadioReportId("han_m_070303", InstanceName = nameof(NerveCompressionFindingType.CarpalTunnelSyndrome))]
        [RadioReportId("han_m_070311", InstanceName = nameof(NerveCompressionFindingType.UlnarTunnelSyndrome))]
        Secondary = 2
	}
}
