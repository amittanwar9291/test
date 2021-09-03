using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums.Bones
{
	public enum ContrastAgentEnhancementFormType : byte
	{
		None = 0,

		[RadioReportId("anc_m_0404223", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
		Peripheral = 1,

		[RadioReportId("anc_m_0404224", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
		Central = 2,

		[RadioReportId("anc_m_0404225", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
		CompleteLesion = 3,

		[RadioReportId("anc_m_0404226", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
		Septal = 4,

		[RadioReportId("anc_m_0404227", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
		WithinTheNidus = 5
	}
}
