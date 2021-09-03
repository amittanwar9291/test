using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums.Bones
{
	public enum StageType : byte
	{
		None = 0,

		[RadioReportId("anc_m_0402241", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
		Acute = 1,

		[RadioReportId("anc_m_0402242", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
		Chronic = 2

	}
}