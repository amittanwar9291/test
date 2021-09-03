using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bones
{
	public enum ODifferentialDiagnosisType : byte
	{
		None = 0,

		[RadioReportId("pel_m_100566", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
		EwingsSarcoma = 1,

		[RadioReportId("pel_m_100567", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
		Chondroblastoma = 2

	}
}
