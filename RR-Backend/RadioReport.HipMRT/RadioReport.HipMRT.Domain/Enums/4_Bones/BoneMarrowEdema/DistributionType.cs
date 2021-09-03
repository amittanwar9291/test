using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum DistributionType : byte
	{
		None = 0,

		[RadioReportId("hip_m_040366", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        Subchondral = 1,

		[RadioReportId("hip_m_040367", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        Circumscribed = 2,

		[RadioReportId("hip_m_040368", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        Diffuse = 3,

		[RadioReportId("hip_m_040369", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        DiffuseSpotted = 4,

		[RadioReportId("hip_m_040370", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        SubcorticalEdemathinSubchondral = 5
	}
}
