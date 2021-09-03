using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
	public enum MuscularAtrophyType : byte
	{
		None = 0,

		[RadioReportId("sho_m_080419", InstanceName = nameof(MusculatureFindingType.OtherFindings))]
		Complete = 1,

		[RadioReportId("sho_m_080420", InstanceName = nameof(MusculatureFindingType.OtherFindings))]
		Partially = 2
	}
}
