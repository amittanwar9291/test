using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums.Bones
{
	public enum SynarthrosisType : byte
	{
		None = 0,

		[RadioReportId("anc_m_040305", InstanceName = nameof(BonesFindingType.NormalVariantOrAnomaly))]
		SyndesmosisOrFibrous = 1,

		[RadioReportId("anc_m_040306", InstanceName = nameof(BonesFindingType.NormalVariantOrAnomaly))]
		SynchondrosisOrCartilagenous = 2,

		[RadioReportId("anc_m_040307", InstanceName = nameof(BonesFindingType.NormalVariantOrAnomaly))]
		SynostosisOrBony = 3

	}
}
