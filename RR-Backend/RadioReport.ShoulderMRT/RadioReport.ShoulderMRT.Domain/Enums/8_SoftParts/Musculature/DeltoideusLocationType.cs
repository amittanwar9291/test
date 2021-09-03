using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
	public enum DeltoideusLocationType : byte
	{
		None = 0,

		[RadioReportId("sho_m_080240", InstanceName = nameof(SoftPartsFindingType.Musculature))]
		ParsClavicularis = 1,

		[RadioReportId("sho_m_080241", InstanceName = nameof(SoftPartsFindingType.Musculature))]
		AcromialPars = 2,

		[RadioReportId("sho_m_080242", InstanceName = nameof(SoftPartsFindingType.Musculature))]
		ParsSpinalis = 3
	}
}
