using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bones
{
	public enum TransverseFracturePartialJointInvolvementType : byte
	{
		None = 0,

		[RadioReportId("pel_m_100422", InstanceName = nameof(BonesFindingType.FractureAcetabulum))]
		TransverseFracture = 1,

		[RadioReportId("pel_m_100423", InstanceName = nameof(BonesFindingType.FractureAcetabulum))]
		TFracture = 2,

		[RadioReportId("pel_m_100424", InstanceName = nameof(BonesFindingType.FractureAcetabulum))]
		PosteriorHemitransverseFracture = 3
	}
}
