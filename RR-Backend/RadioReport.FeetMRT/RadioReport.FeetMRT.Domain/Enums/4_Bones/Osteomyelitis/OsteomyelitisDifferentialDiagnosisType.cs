using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums.Bones
{
	public enum OsteomyelitisDifferentialDiagnosisType : byte
	{
		None = 0,

		[RadioReportId("anc_m_0405227", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        EwingSarcoma = 1,

		[RadioReportId("anc_m_0405228", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        Chondroblastoma = 2
	}
}