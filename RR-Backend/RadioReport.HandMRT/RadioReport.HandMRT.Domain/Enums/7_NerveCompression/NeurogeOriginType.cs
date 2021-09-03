using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HandMRT.Domain.Enums
{
	public enum NeurogeneOriginType : byte
	{
		None = 0,

        [RadioReportId("han_m_070410", InstanceName = nameof(NerveCompressionFindingType.CarpalTunnelSyndrome))]
        [RadioReportId("han_m_070426", InstanceName = nameof(NerveCompressionFindingType.UlnarTunnelSyndrome))]
        SoftTissueTumor = 1,

        [RadioReportId("han_m_070411")]
        NormalVariantArtery = 2,

        [RadioReportId("han_m_070427")]
        AneurysmOfArtery = 3,

        [RadioReportId("han_m_070428")]
        ThrombosisOfArtery = 4
    }
}
