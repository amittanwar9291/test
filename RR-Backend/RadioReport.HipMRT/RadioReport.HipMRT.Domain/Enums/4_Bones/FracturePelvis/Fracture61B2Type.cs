using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum Fracture61B2Type : byte
	{
		None = 0,

		[RadioReportId("hip_m_040567", InstanceName = nameof(BonesFindingType.FracturePelvis))]
        LateralCompressionFractureOfSacrum = 1,

		[RadioReportId("hip_m_040568", InstanceName = nameof(BonesFindingType.FracturePelvis))]
        LateralCompressionFractureOfIlium = 2,

		[RadioReportId("hip_m_040569", InstanceName = nameof(BonesFindingType.FracturePelvis))]
        OpenBookOrExternalRotationInstability = 3
	}
}
