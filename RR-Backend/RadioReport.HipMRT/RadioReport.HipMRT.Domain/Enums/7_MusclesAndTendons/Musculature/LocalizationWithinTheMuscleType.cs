using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Domain.Enums
{
	public enum IntramuscularLocalizationType : byte
	{
		None = 0,

		[RadioReportId("hip_m_070208", InstanceName = nameof(MusclesAndTendonsFindingType.Musculature))]
		ProximalEnthesis = 1,

		[RadioReportId("hip_m_070209", InstanceName = nameof(MusclesAndTendonsFindingType.Musculature))]
        ProxMyotendinousJunction = 2,

		[RadioReportId("hip_m_070210", InstanceName = nameof(MusclesAndTendonsFindingType.Musculature))]
        ProximalThird = 3,

		[RadioReportId("hip_m_070211", InstanceName = nameof(MusclesAndTendonsFindingType.Musculature))]
        MiddleThird = 4,

		[RadioReportId("hip_m_070212", InstanceName = nameof(MusclesAndTendonsFindingType.Musculature))]
        DistalThird = 5,

		[RadioReportId("hip_m_070213", InstanceName = nameof(MusclesAndTendonsFindingType.Musculature))]
        DistMyotendinousJunction = 6,

		[RadioReportId("hip_m_070214", InstanceName = nameof(MusclesAndTendonsFindingType.Musculature))]
		DistEnthesis = 7

	}
}
