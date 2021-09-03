using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bones
{
	public enum FbFractureFormB1SubType : byte
	{
		None = 0,

		[RadioReportId("pel_m_100596", InstanceName = nameof(BonesFindingType.FracturePelvis))]
		LateralCompressionFracture = 1,

		[RadioReportId("pel_m_100597", InstanceName = nameof(BonesFindingType.FracturePelvis))]
		FractureOsSacrum = 2
	}
}
