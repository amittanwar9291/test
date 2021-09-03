using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HandMRT.Domain.Enums
{
	public enum SoftTissueOriginType : byte
	{
		None = 0,

		[RadioReportId("han_m_070412", InstanceName = nameof(NerveCompressionFindingType.CarpalTunnelSyndrome))]
		[RadioReportId("han_m_070429", InstanceName = nameof(NerveCompressionFindingType.UlnarTunnelSyndrome))]
		Calcification = 1,

        [RadioReportId("han_m_070413", InstanceName = nameof(NerveCompressionFindingType.CarpalTunnelSyndrome))]
        [RadioReportId("han_m_070432", InstanceName = nameof(NerveCompressionFindingType.UlnarTunnelSyndrome))]
        Tumor = 2,

        [RadioReportId("han_m_070414", InstanceName = nameof(NerveCompressionFindingType.CarpalTunnelSyndrome))]
        [RadioReportId("han_m_070433", InstanceName = nameof(NerveCompressionFindingType.UlnarTunnelSyndrome))]
        Lipomastosis = 3,

        [RadioReportId("han_m_070430")]
        ThickenedTendon = 4,

        [RadioReportId("han_m_070431")]
        AtipicalAbductorMuscle = 5,
    }
}
