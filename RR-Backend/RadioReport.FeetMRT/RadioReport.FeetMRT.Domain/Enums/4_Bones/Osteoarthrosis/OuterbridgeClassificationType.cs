using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums.Bones
{
	public enum OuterbridgeClassificationType : byte
	{
		None = 0,

		[RadioReportId("anc_m_0403302", InstanceName = nameof(BonesFindingType.Osteoarthritis))]
		GradeI = 1,

		[RadioReportId("anc_m_0403303", InstanceName = nameof(BonesFindingType.Osteoarthritis))]
		GradeII = 2,

		[RadioReportId("anc_m_0403304", InstanceName = nameof(BonesFindingType.Osteoarthritis))]
		GradeIII = 3,

		[RadioReportId("anc_m_0403305", InstanceName = nameof(BonesFindingType.Osteoarthritis))]
		GradeIV = 4

	}
}
