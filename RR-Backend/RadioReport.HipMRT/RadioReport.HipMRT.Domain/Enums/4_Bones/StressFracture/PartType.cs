using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum PartType : byte
	{
		None = 0,

		[RadioReportId("hip_m_040208", InstanceName = nameof(BonesFindingType.StressFracture))]
        Medial = 1,

		[RadioReportId("hip_m_040209", InstanceName = nameof(BonesFindingType.StressFracture))]
        Lateral = 2
	}
}
