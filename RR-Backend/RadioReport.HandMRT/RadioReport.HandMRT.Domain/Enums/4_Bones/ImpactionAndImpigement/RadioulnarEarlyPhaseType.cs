using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HandMRT.Domain.Enums
{
	public enum RadioulnarEarlyPhaseType : byte
	{
		None = 0,

		[RadioReportId("han_m_0403118", InstanceName = nameof(BonesFindingType.ImpactionAndImpingementSyndrome))]
		FocalBoneMarrowEdema = 1,

		[RadioReportId("han_m_0403119", InstanceName = nameof(BonesFindingType.ImpactionAndImpingementSyndrome))]
		UlnarHeadChondropathy = 2,

	}
}
