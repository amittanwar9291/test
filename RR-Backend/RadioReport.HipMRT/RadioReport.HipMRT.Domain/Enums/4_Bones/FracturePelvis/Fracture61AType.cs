using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum Fracture61AType : byte
	{
		None = 0,

		[RadioReportId("hip_m_040429", InstanceName = nameof(BonesFindingType.FracturePelvis))]
        InnominateBoneAvulsion = 1,

		[RadioReportId("hip_m_040430", InstanceName = nameof(BonesFindingType.FracturePelvis))]
        InnominateBoneFracture = 2,

		[RadioReportId("hip_m_040431", InstanceName = nameof(BonesFindingType.FracturePelvis))]
        TransverseFractureOfSacrumAndCoccyx = 3
	}
}
