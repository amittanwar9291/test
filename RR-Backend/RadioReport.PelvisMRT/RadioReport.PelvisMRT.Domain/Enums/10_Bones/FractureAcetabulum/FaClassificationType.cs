using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bones
{
    public enum FaClassificationType : byte
	{
		None = 0,

		[RadioReportId("pel_m_100311", InstanceName = nameof(BonesFindingType.FractureAcetabulum))]
		FractureWallPartialJointInvolvement = 1,

		[RadioReportId("pel_m_100312", InstanceName = nameof(BonesFindingType.FractureAcetabulum))]
		TransverseFracturePartialJointInvolvement = 2,

		[RadioReportId("pel_m_100313", InstanceName = nameof(BonesFindingType.FractureAcetabulum))]
		FractureBothColumnsCompleteJointInvolvement = 3,

		[RadioReportId("pel_m_100314", InstanceName = nameof(BonesFindingType.FractureAcetabulum))]
		AcetabularFractureNotFurther = 4
	}
}
