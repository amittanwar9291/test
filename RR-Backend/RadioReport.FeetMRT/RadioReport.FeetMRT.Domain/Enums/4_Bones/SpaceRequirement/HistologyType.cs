using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums.Bones
{
	public enum HistologyType : byte
	{
		None = 0,

		[RadioReportId("anc_m_0402205", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
		Benign = 1,

		[RadioReportId("anc_m_0402206", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
		Malignant = 2,
	}
}
