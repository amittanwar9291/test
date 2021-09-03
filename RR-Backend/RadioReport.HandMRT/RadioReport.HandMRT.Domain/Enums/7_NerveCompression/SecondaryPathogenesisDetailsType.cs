using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HandMRT.Domain.Enums
{
	public enum SecondaryPathogenesisDetailsType : byte
	{
		None = 0,

        [RadioReportId("han_m_070304", InstanceName = nameof(NerveCompressionFindingType.CarpalTunnelSyndrome))]
        [RadioReportId("han_m_070312", InstanceName = nameof(NerveCompressionFindingType.UlnarTunnelSyndrome))]
        OsseousOrigin = 1,

		[RadioReportId("han_m_070305", InstanceName = nameof(NerveCompressionFindingType.CarpalTunnelSyndrome))]
        [RadioReportId("han_m_070313", InstanceName = nameof(NerveCompressionFindingType.UlnarTunnelSyndrome))]
        SynovialOrigin = 2,

		[RadioReportId("han_m_070306", InstanceName = nameof(NerveCompressionFindingType.CarpalTunnelSyndrome))]
        [RadioReportId("han_m_070314", InstanceName = nameof(NerveCompressionFindingType.UlnarTunnelSyndrome))]
        NeurogenicvascularOrigin = 3,

		[RadioReportId("han_m_070307", InstanceName = nameof(NerveCompressionFindingType.CarpalTunnelSyndrome))]
		[RadioReportId("han_m_070315", InstanceName = nameof(NerveCompressionFindingType.UlnarTunnelSyndrome))]
		SoftTissueMass = 4,

        [RadioReportId("han_m_070308")]
        Postoperative = 5
    }
}
