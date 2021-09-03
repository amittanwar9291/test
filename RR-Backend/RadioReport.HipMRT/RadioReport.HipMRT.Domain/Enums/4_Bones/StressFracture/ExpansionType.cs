using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum ExpansionType : byte
	{
		None = 0,

		[RadioReportId("hip_m_040343", InstanceName = nameof(BonesFindingType.StressFracture))]
        BelowEqual6Mm = 1,

		[RadioReportId("hip_m_040344", InstanceName = nameof(BonesFindingType.StressFracture))]
        Over6Mm = 2
	}
}
