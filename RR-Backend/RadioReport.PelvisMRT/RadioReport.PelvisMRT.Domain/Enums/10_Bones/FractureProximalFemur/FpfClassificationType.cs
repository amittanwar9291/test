using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bones
{
	public enum FpfClassificationType : byte
	{
		None = 0,

		[RadioReportId("pel_m_100302", InstanceName = nameof(BonesFindingType.FractureProximalFemur))]
		TrochantericRegion = 1,

		[RadioReportId("pel_m_100303", InstanceName = nameof(BonesFindingType.FractureProximalFemur))]
		FemoralNeckFracture = 2,

		[RadioReportId("pel_m_100304", InstanceName = nameof(BonesFindingType.FractureProximalFemur))]
		FemoralHeadFracture = 3,

		[RadioReportId("pel_m_100305", InstanceName = nameof(BonesFindingType.FractureProximalFemur))]
		ProximalFemurFractureNotSpecified = 4
	}
}
