using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums.Bones
{
	public enum DislocationLocalizationType : byte
	{
		None = 0,

		[RadioReportId("anc_m_040213", InstanceName = nameof(BonesFindingType.Dislocation))]
		TalocruralJoint = 1,

		[RadioReportId("anc_m_040214", InstanceName = nameof(BonesFindingType.Dislocation))]
		SubtalarJoint = 2,

		[RadioReportId("anc_m_040215", InstanceName = nameof(BonesFindingType.Dislocation))]
		TarsometatarsalLisfranc = 3

	}
}
