using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum ExpansionCoronalType : byte
	{
		None = 0,

		[RadioReportId("hip_m_040348", InstanceName = nameof(BonesFindingType.StressFracture))]
        Below50 = 1,

        [RadioReportId("hip_m_040349", InstanceName = nameof(BonesFindingType.StressFracture))]
        EqualOver50 = 2
	}
}
