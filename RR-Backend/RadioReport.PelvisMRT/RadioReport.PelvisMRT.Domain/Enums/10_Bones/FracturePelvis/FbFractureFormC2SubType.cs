using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bones
{
	public enum FbFractureFormC2SubType : byte
	{
		None = 0,

		[RadioReportId("pel_m_1005107", InstanceName = nameof(BonesFindingType.FracturePelvis))]
		SymphysealDisruptionUnilateralOsIlium = 1,

		[RadioReportId("pel_m_1005108", InstanceName = nameof(BonesFindingType.FracturePelvis))]
		SymphysealDisruptionOnesidedBlasting = 2,

		[RadioReportId("pel_m_1005109", InstanceName = nameof(BonesFindingType.FracturePelvis))]
		SymphysealDisruptionUnilateralOsSacrum = 3

	}
}
