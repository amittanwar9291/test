using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bones
{
	public enum SimpleFractureType : byte
	{
		None = 0,

		[RadioReportId("pel_m_100526", InstanceName = nameof(BonesFindingType.FractureFemoralShaft))]
		SpiralFracture = 1,

		[RadioReportId("pel_m_100527", InstanceName = nameof(BonesFindingType.FractureFemoralShaft))]
		ObliqueFracture = 2,

		[RadioReportId("pel_m_100528", InstanceName = nameof(BonesFindingType.FractureFemoralShaft))]
		TransverseFracture = 3
	}
}
