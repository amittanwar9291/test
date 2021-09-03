using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum ClassificationRohenaQuinquillaType : byte
	{
		None = 0,

		[RadioReportId("hip_m_040436", InstanceName = nameof(BonesFindingType.StressFracture))]
        Grade1 = 1,

		[RadioReportId("hip_m_040437", InstanceName = nameof(BonesFindingType.StressFracture))]
        Grade2 = 2,

		[RadioReportId("hip_m_040438", InstanceName = nameof(BonesFindingType.StressFracture))]
        Grade3 = 3,

		[RadioReportId("hip_m_040439", InstanceName = nameof(BonesFindingType.StressFracture))]
        Grade4 = 4
	}
}
