using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bones
{
	public enum AnfhCortexType : byte
	{
		None = 0,

		[RadioReportId("pel_m_100484", InstanceName = nameof(BonesFindingType.AvascularNecrosisOfTheFemoralHead))]
		Intact = 1,

		[RadioReportId("pel_m_100485", InstanceName = nameof(BonesFindingType.AvascularNecrosisOfTheFemoralHead))]
		InsufficiencyFracture = 2,

		[RadioReportId("pel_m_100486", InstanceName = nameof(BonesFindingType.AvascularNecrosisOfTheFemoralHead))]
		Collapse = 3
	}
}
