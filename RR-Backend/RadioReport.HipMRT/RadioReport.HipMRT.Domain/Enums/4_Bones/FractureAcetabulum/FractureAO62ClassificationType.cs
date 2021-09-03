using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum FractureAO62ClassificationType : byte
	{
		None = 0,

		[RadioReportId("hip_m_040327", InstanceName = nameof(BonesFindingType.FractureAcetabulum))]
        IsolatedColumnAndor = 1,

		[RadioReportId("hip_m_040328", InstanceName = nameof(BonesFindingType.FractureAcetabulum))]
        TransverseFractureWith = 2,

		[RadioReportId("hip_m_040329", InstanceName = nameof(BonesFindingType.FractureAcetabulum))]
        FractureOfBoth = 3,

		[RadioReportId("hip_m_040330", InstanceName = nameof(BonesFindingType.FractureAcetabulum))]
        NotFurtherSpecified = 4
	}
}
