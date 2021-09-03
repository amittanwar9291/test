using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bones
{
	public enum TbmeDifferentialDiagnosisType : byte
	{
		None = 0,

		[RadioReportId("pel_m_100473", InstanceName = nameof(BonesFindingType.TransientBoneMarrowEdema))]
		StressFracture = 1,

		[RadioReportId("pel_m_100475", InstanceName = nameof(BonesFindingType.TransientBoneMarrowEdema))]
		Metastasis = 2,

		[RadioReportId("pel_m_100476", InstanceName = nameof(BonesFindingType.TransientBoneMarrowEdema))]
		Osteomyelitis = 3
	}
}
