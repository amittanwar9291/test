using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum StageType : byte
	{
		None = 0,

		[RadioReportId("hip_m_040235", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        Acute = 1,

		[RadioReportId("hip_m_040236", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        Chronic = 2
	}
}
