using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Bones
{
	public enum PathologyType : byte
	{
		None = 0,

		[RadioReportId("nec_m_100213", InstanceName = nameof(BonesFindingType.IntervertebralDisc))]
		Bulging = 1,

		[RadioReportId("nec_m_100214", InstanceName = nameof(BonesFindingType.IntervertebralDisc))]
		Degeneration = 2,

		[RadioReportId("nec_m_100215", InstanceName = nameof(BonesFindingType.IntervertebralDisc))]
		Protrusion = 3,

		[RadioReportId("nec_m_100216", InstanceName = nameof(BonesFindingType.IntervertebralDisc))]
		Extrusion = 4,

		[RadioReportId("nec_m_100217", InstanceName = nameof(BonesFindingType.IntervertebralDisc))]
		Migration = 5,

		[RadioReportId("nec_m_100218", InstanceName = nameof(BonesFindingType.IntervertebralDisc))]
		Sequestration = 6

	}
}
