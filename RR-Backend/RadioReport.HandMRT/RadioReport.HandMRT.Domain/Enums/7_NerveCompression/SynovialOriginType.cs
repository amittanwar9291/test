using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HandMRT.Domain.Enums
{
	public enum SynovialOriginType : byte
	{
		None = 0,

        [RadioReportId("han_m_070406", InstanceName = nameof(NerveCompressionFindingType.CarpalTunnelSyndrome))]
        [RadioReportId("han_m_070423", InstanceName = nameof(NerveCompressionFindingType.UlnarTunnelSyndrome))]
        Ganglion = 1,

        [RadioReportId("han_m_070407", InstanceName = nameof(NerveCompressionFindingType.CarpalTunnelSyndrome))]
        [RadioReportId("han_m_070424", InstanceName = nameof(NerveCompressionFindingType.UlnarTunnelSyndrome))]
        Tenosynovitis = 2,

		[RadioReportId("han_m_070408")]
        Tenosynovialosis = 3,

        [RadioReportId("han_m_070409", InstanceName = nameof(NerveCompressionFindingType.CarpalTunnelSyndrome))]
        [RadioReportId("han_m_070425", InstanceName = nameof(NerveCompressionFindingType.UlnarTunnelSyndrome))]
        GiantCellTumor = 4,
	}
}
