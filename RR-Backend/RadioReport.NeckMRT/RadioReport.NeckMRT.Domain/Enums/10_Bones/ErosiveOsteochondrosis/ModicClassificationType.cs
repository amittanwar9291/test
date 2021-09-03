using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Bones
{
	public enum ModicClassificationType : byte
	{
		None = 0,

		[RadioReportId("nec_m_100314", InstanceName = nameof(BonesFindingType.ErosiveOsteochondrosis))]
		ModicTypeI = 1,

		[RadioReportId("nec_m_100315", InstanceName = nameof(BonesFindingType.ErosiveOsteochondrosis))]
		ModicTypeII = 2,

		[RadioReportId("nec_m_100316", InstanceName = nameof(BonesFindingType.ErosiveOsteochondrosis))]
		ModicTypeIII = 3

	}
}
