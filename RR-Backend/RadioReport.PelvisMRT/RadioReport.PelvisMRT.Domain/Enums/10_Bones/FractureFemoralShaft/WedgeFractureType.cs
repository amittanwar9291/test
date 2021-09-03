using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bones
{
	public enum WedgeFractureType : byte
	{
		None = 0,

		[RadioReportId("pel_m_100529", InstanceName = nameof(BonesFindingType.FractureFemoralShaft))]
		WithIntactWedge = 1,

		[RadioReportId("pel_m_100530", InstanceName = nameof(BonesFindingType.FractureFemoralShaft))]
		WithFragmentedWedge = 2
	}
}
