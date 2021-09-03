using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bones
{
	public enum  TranscervicalType : byte
	{
		None = 0,

		[RadioReportId("pel_m_100514", InstanceName = nameof(BonesFindingType.FractureProximalFemur))]
		SimpleFracture = 1,

		[RadioReportId("pel_m_100515", InstanceName = nameof(BonesFindingType.FractureProximalFemur))]
		MultipleFracture = 2,

		[RadioReportId("pel_m_100516", InstanceName = nameof(BonesFindingType.FractureProximalFemur))]
		ShearFracture = 3
	}
}
