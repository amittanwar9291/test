using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
	public enum LocationType : byte
	{
		None = 0,

		[RadioReportId("sho_m_080212", InstanceName = nameof(SoftPartsFindingType.Musculature))]
		MDeltoid = 1,

		[RadioReportId("sho_m_080214", InstanceName = nameof(SoftPartsFindingType.Musculature))]
		MPectoralisMajor = 2,

		[RadioReportId("sho_m_080216", InstanceName = nameof(SoftPartsFindingType.Musculature))]
		MCoracobrachial = 3,

		[RadioReportId("sho_m_080218", InstanceName = nameof(SoftPartsFindingType.Musculature))]
		MTeresMajor = 4,

		[RadioReportId("sho_m_080220", InstanceName = nameof(SoftPartsFindingType.Musculature))]
		MInfraspinatus = 5,

		[RadioReportId("sho_m_080221", InstanceName = nameof(SoftPartsFindingType.Musculature))]
		MSupraspinatus = 6,

		[RadioReportId("sho_m_080222", InstanceName = nameof(SoftPartsFindingType.Musculature))]
		MSubscapularis = 7,

		[RadioReportId("sho_m_080223", InstanceName = nameof(SoftPartsFindingType.Musculature))]
		MTeresMinor = 8
	}
}
