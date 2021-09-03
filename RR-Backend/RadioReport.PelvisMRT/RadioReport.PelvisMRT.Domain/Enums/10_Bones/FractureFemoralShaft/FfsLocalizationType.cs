using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bones
{
	public enum FfsLocalizationType : byte
	{
		None = 0,

		[RadioReportId("pel_m_100307", InstanceName = nameof(BonesFindingType.FractureFemoralShaft))]
		AProximalThird = 1,

		[RadioReportId("pel_m_100308", InstanceName = nameof(BonesFindingType.FractureFemoralShaft))]
		BMiddleThird = 2,

		[RadioReportId("pel_m_100309", InstanceName = nameof(BonesFindingType.FractureFemoralShaft))]
		CDistalThird = 3
	}
}
