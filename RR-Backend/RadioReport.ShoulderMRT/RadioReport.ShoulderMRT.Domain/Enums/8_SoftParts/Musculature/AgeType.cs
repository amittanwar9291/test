using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
	public enum AgeType : byte
	{
		None = 0,

		[RadioReportId("sho_m_080503", InstanceName = nameof(MusculatureFindingType.MuscularHaematoma))]
		Hyperacute = 1,

		[RadioReportId("sho_m_080504", InstanceName = nameof(MusculatureFindingType.MuscularHaematoma))]
		Acute = 2,

		[RadioReportId("sho_m_080505", InstanceName = nameof(MusculatureFindingType.MuscularHaematoma))]
		Subacute = 3,

		[RadioReportId("sho_m_080506", InstanceName = nameof(MusculatureFindingType.MuscularHaematoma))]
		ChronicOrganized = 4
	}
}
