using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums.Bones
{
	public enum AssociatedFindingsType : byte
	{
		None = 0,

		[RadioReportId("anc_m_040473", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
		SoftTissueEdema = 1,

		[RadioReportId("anc_m_040474", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
		SynovialThickening = 2,

		[RadioReportId("anc_m_040475", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
		SubchondralFracture = 3,

		[RadioReportId("anc_m_0404307", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
		CutisThickening = 4
    }
}
