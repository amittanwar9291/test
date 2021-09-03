using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum Fracture62BType : byte
	{
		None = 0,

		[RadioReportId("hip_m_040423", InstanceName = nameof(BonesFindingType.FractureAcetabulum))]
        TransverseFracture = 1,

		[RadioReportId("hip_m_040424", InstanceName = nameof(BonesFindingType.FractureAcetabulum))]
        Tfracture = 2,

		[RadioReportId("hip_m_040425", InstanceName = nameof(BonesFindingType.FractureAcetabulum))]
        PosteriorHemitransversefractureWith = 3
	}
}
