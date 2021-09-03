using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bones
{
	public enum FbFractureFormC1SubType : byte
	{
		None = 0,

		[RadioReportId("pel_m_1005104", InstanceName = nameof(BonesFindingType.FracturePelvis))]
		SymphysealDisruptionAndFractureOsIlium = 1,

		[RadioReportId("pel_m_1005105", InstanceName = nameof(BonesFindingType.FracturePelvis))]
		SymphysealDisruptionAndIsJoint= 2,

		[RadioReportId("pel_m_1005106", InstanceName = nameof(BonesFindingType.FracturePelvis))]
		SymphysealDisruptionAndFractureOsSacrum = 3
	}
}
