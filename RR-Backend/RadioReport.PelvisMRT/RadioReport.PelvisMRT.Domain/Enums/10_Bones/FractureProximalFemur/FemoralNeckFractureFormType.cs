using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bones
{
	public enum FemoralNeckFractureFormType : byte
	{
		None = 0,

		[RadioReportId("pel_m_100405", InstanceName = nameof(BonesFindingType.FractureProximalFemur))]
		Subcapital = 1,

		[RadioReportId("pel_m_100406", InstanceName = nameof(BonesFindingType.FractureProximalFemur))]
		Transcervical = 2,

		[RadioReportId("pel_m_100407", InstanceName = nameof(BonesFindingType.FractureProximalFemur))]
		BaseCervical = 3
	}
}
