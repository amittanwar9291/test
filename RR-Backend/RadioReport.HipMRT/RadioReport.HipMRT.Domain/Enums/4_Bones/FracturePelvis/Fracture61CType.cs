using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum Fracture61CType : byte
	{
		None = 0,

		[RadioReportId("hip_m_040432", InstanceName = nameof(BonesFindingType.FracturePelvis))]
        UnilateralPosteriorInjury = 1,

		[RadioReportId("hip_m_040433", InstanceName = nameof(BonesFindingType.FracturePelvis))]
        ContralateralHemipelvisInjury = 2,

		[RadioReportId("hip_m_040434", InstanceName = nameof(BonesFindingType.FracturePelvis))]
        BothSidesComplete = 3
	}
}
