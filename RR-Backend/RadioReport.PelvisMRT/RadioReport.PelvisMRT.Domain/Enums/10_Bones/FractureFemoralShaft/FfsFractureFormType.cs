using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bones
{
	public enum FfsFractureFormType : byte
	{
		None = 0,

		[RadioReportId("pel_m_100415", InstanceName = nameof(BonesFindingType.FractureFemoralShaft))]
		SimpleFracture = 1,

		[RadioReportId("pel_m_100416", InstanceName = nameof(BonesFindingType.FractureFemoralShaft))]
		WedgeFracture = 2,

		[RadioReportId("pel_m_100417", InstanceName = nameof(BonesFindingType.FractureFemoralShaft))]
		MultiFragmentaryFracture = 3,

		[RadioReportId("pel_m_100418", InstanceName = nameof(BonesFindingType.FractureFemoralShaft))]
		FemoralShaftFractureNotSpecified = 4
	}
}
