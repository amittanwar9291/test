using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
	public enum OsteomyelitisDifferentialDiagnosisType : byte
	{
		None = 0,

		[RadioReportId("hip_m_0405120", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        EwingSarcoma = 1,

		[RadioReportId("hip_m_0405121", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        Chondroblastoma = 2
	}
}
