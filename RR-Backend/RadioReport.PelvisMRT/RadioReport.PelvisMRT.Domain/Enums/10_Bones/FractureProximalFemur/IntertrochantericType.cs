using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bones
{
	public enum IntertrochantericType : byte
	{
		None = 0,

		[RadioReportId("pel_m_100508", InstanceName = nameof(BonesFindingType.FractureProximalFemur))]
		SimpleObliqueFracture = 1,

		[RadioReportId("pel_m_100509", InstanceName = nameof(BonesFindingType.FractureProximalFemur))]
		SimpleTransverseFracture = 2,

		[RadioReportId("pel_m_100510", InstanceName = nameof(BonesFindingType.FractureProximalFemur))]
		WedgemultipleFracture = 3
	}
}
