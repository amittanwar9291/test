using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bones
{
	public enum MultiFragmentaryFractureType : byte
	{
		None = 0,

		[RadioReportId("pel_m_100531", InstanceName = nameof(BonesFindingType.FractureFemoralShaft))]
		IntactIntermediate = 1,

		[RadioReportId("pel_m_100532", InstanceName = nameof(BonesFindingType.FractureFemoralShaft))]
		FragmentedIntermediate = 2
	}
}
