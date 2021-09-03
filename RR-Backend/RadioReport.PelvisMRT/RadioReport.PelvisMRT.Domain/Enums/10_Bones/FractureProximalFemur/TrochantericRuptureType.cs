using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bones
{
	public enum TrochantericRuptureType : byte
	{
		None = 0,

		[RadioReportId("pel_m_100502", InstanceName = nameof(BonesFindingType.FractureProximalFemur))]
		Major = 1,

		[RadioReportId("pel_m_100503", InstanceName = nameof(BonesFindingType.FractureProximalFemur))]
		Minor = 2
	}
}
