using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Domain.Enums
{
	public enum MuscularAtrophyType : byte
	{
		None = 0,

		[RadioReportId("hip_m_070421", InstanceName = nameof(MusclesAndTendonsFindingType.Musculature))]
        Moderate = 1,

		[RadioReportId("hip_m_070422", InstanceName = nameof(MusclesAndTendonsFindingType.Musculature))]
        Advanced = 2

	}
}
