using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Bones
{
	public enum ExtensionReferenceSpinalCanalType : byte
	{
		None = 0,

		[RadioReportId("nec_m_100310", InstanceName = nameof(BonesFindingType.IntervertebralDisc))]
		Weak = 1,

		[RadioReportId("nec_m_100311", InstanceName = nameof(BonesFindingType.IntervertebralDisc))]
		Moderate = 2,

		[RadioReportId("nec_m_100312", InstanceName = nameof(BonesFindingType.IntervertebralDisc))]
		Pronounced = 3

	}
}
