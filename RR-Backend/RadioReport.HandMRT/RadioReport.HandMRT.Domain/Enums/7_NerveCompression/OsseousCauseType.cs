using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HandMRT.Domain.Enums
{
	public enum OsseousCauseType : byte
	{
		None = 0,

		[RadioReportId("han_m_070501", InstanceName = nameof(NerveCompressionFindingType.CarpalTunnelSyndrome))]
		[RadioReportId("han_m_070515", InstanceName = nameof(NerveCompressionFindingType.UlnarTunnelSyndrome))]
		Fracture = 1,

		[RadioReportId("han_m_070502", InstanceName = nameof(NerveCompressionFindingType.CarpalTunnelSyndrome))]
		[RadioReportId("han_m_070518", InstanceName = nameof(NerveCompressionFindingType.UlnarTunnelSyndrome))]
		Dislocation = 2,

		[RadioReportId("han_m_070503", InstanceName = nameof(NerveCompressionFindingType.CarpalTunnelSyndrome))]
		[RadioReportId("han_m_070519", InstanceName = nameof(NerveCompressionFindingType.UlnarTunnelSyndrome))]
		Degeneration = 3,

		[RadioReportId("han_m_070505", InstanceName = nameof(NerveCompressionFindingType.CarpalTunnelSyndrome))]
		[RadioReportId("han_m_070521", InstanceName = nameof(NerveCompressionFindingType.UlnarTunnelSyndrome))]
		Tumor = 4
	}
}
