using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
	public enum ClassificationMunichConsensusType : byte
	{
		None = 0,

		[RadioReportId("sho_m_080411", InstanceName = nameof(MusculatureFindingType.MuscleLesion))]
		MuscularEdema = 1,

		[RadioReportId("sho_m_080412", InstanceName = nameof(MusculatureFindingType.MuscleLesion))]
		MuscleFibreRuptureTypeIIIA = 2,

		[RadioReportId("sho_m_080413", InstanceName = nameof(MusculatureFindingType.MuscleLesion))]
		TornMuscleBundleTypeIIIB = 3,

		[RadioReportId("sho_m_080414", InstanceName = nameof(MusculatureFindingType.MuscleLesion))]
		TornMuscleOrTendonRuptureTypeIV = 4
	}
}
