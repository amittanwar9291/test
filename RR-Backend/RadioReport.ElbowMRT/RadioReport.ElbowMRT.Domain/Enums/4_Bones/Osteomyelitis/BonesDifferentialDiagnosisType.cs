using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums.Bones
{
	public enum BonesDifferentialDiagnosisType : byte
	{
		None = 0,

		[RadioReportId("elb_m_0405134", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        EwingSarcoma = 1,

		[RadioReportId("elb_m_0405135", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
		Chondroblastoma = 2
	}
}
