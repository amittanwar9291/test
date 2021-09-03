using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum AcetabulumType : byte
	{
		None = 0,

		[RadioReportId("hip_m_040406", InstanceName = nameof(BonesFindingType.Alignment))]
        Insufficiency = 1,

		[RadioReportId("hip_m_040407", InstanceName = nameof(BonesFindingType.Alignment))]
        Enlarged = 2
	}
}
