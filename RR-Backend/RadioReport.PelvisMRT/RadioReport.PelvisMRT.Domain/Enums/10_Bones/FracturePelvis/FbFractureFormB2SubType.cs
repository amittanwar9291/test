using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bones
{
	public enum FbFractureFormB2SubType : byte
	{
		None = 0,

		[RadioReportId("pel_m_100598", InstanceName = nameof(BonesFindingType.FracturePelvis))]
		InternalRotationLateralCompressionFractureOsSacrum = 1,

		[RadioReportId("pel_m_100599", InstanceName = nameof(BonesFindingType.FracturePelvis))]
		InternalRotationLateralCompressionFractureOsIlium = 2,

		[RadioReportId("pel_m_1005100", InstanceName = nameof(BonesFindingType.FracturePelvis))]
		OpenBook = 3
	}
}
