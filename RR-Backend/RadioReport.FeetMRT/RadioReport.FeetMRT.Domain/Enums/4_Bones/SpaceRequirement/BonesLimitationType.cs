using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums.Bones
{
	public enum BonesLimitationType : byte
	{
		None = 0,

		[RadioReportId("anc_m_0402208", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
		Circumscribed = 1,

		[RadioReportId("anc_m_0402209", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
		IllDefined = 2,

		[RadioReportId("anc_m_0402210", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
		MixedType = 3
	}
}
