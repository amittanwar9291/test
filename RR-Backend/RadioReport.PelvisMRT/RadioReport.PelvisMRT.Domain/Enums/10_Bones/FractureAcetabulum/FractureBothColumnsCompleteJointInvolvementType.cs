using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bones
{
	public enum FractureBothColumnsCompleteJointInvolvementType : byte
	{
		None = 0,

		[RadioReportId("pel_m_100425", InstanceName = nameof(BonesFindingType.FractureAcetabulum))]
		FractureAnteriorColumnHighVariant = 1,

		[RadioReportId("pel_m_100426", InstanceName = nameof(BonesFindingType.FractureAcetabulum))]
		FractureAnteriorColumnDeepVariant = 2,

		[RadioReportId("pel_m_100427", InstanceName = nameof(BonesFindingType.FractureAcetabulum))]
		SacroiliacJointInvolvement = 3
	}
}
