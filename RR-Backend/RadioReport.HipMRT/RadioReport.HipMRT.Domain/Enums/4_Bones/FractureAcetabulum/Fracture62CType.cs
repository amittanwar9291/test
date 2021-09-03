using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum Fracture62CType : byte
	{
		None = 0,

		[RadioReportId("hip_m_040426", InstanceName = nameof(BonesFindingType.FractureAcetabulum))]
        HighAnteriorColumn = 1,

		[RadioReportId("hip_m_040427", InstanceName = nameof(BonesFindingType.FractureAcetabulum))]
        LowAnteriorColumn = 2,

		[RadioReportId("hip_m_040428", InstanceName = nameof(BonesFindingType.FractureAcetabulum))]
        SacroiliacJointInvolvement = 3
	}
}
