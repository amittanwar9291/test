using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HandMRT.Domain.Enums
{
	public enum RadioulnarLatePhaseType : byte
	{
		None = 0,

		[RadioReportId("han_m_0403121", InstanceName = nameof(BonesFindingType.ImpactionAndImpingementSyndrome))]
		PerifocalBoneMarrowEdema = 1,

		[RadioReportId("han_m_0403122", InstanceName = nameof(BonesFindingType.ImpactionAndImpingementSyndrome))]
		ArrosionWithEnvironmentalSclerosis = 2
	}
}
