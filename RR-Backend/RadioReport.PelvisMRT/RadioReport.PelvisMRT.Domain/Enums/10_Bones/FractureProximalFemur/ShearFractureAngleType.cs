using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bones
{
	public enum ShearFractureAngleType : byte
	{
		None = 0,

		[RadioReportId("pel_m_100517", InstanceName = nameof(BonesFindingType.FractureProximalFemur))]
		PPauwelsAngle = 1,

		[RadioReportId("pel_m_100518", InstanceName = nameof(BonesFindingType.FractureProximalFemur))]
		QPauwelsAngle = 2,

		[RadioReportId("pel_m_100519", InstanceName = nameof(BonesFindingType.FractureProximalFemur))]
		RPauwelsAngle = 3
	}
}
