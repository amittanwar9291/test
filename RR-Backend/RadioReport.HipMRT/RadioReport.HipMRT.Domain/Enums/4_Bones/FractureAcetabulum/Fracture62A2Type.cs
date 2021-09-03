using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum Fracture62A2Type : byte
	{
		None = 0,

		[RadioReportId("hip_m_040544", InstanceName = nameof(BonesFindingType.FractureAcetabulum))]
        ThroughTheIschium = 1,

		[RadioReportId("hip_m_040545", InstanceName = nameof(BonesFindingType.FractureAcetabulum))]
        ThroughTheObturator = 2,

		[RadioReportId("hip_m_040546", InstanceName = nameof(BonesFindingType.FractureAcetabulum))]
        WithAssociatedPosterior = 3
	}
}
