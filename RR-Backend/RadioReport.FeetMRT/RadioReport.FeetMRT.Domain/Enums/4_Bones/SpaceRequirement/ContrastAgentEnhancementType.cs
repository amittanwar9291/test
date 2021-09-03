using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums.Bones
{
	public enum ContrastAgentEnhancementType : byte
	{
		None = 0,

		[RadioReportId("anc_m_0404217", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
		No = 1,

		[RadioReportId("anc_m_0404218", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
		Mild = 2,

		[RadioReportId("anc_m_0404219", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
		Marked = 3
	}
}
