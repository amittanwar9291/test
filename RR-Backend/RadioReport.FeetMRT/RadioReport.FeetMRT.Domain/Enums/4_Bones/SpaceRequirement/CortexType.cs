using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums.Bones
{
	public enum CortexType : byte
	{
		None = 0,

		[RadioReportId("anc_m_0402214", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
		Intact = 1,

		[RadioReportId("anc_m_0402215", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
		ThinningScalopping = 2,

		[RadioReportId("anc_m_0402216", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
		Destruction = 3,

		[RadioReportId("anc_m_0402217", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
		Neocorticalis = 4
	}
}
