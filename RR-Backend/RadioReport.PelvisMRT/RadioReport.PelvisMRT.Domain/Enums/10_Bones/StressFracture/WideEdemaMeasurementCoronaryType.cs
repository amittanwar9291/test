using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bones
{
	public enum WideEdemaMeasurementCoronaryType : byte
	{
		None = 0,

		[RadioReportId("pel_m_100468", InstanceName = nameof(BonesFindingType.StressFracture))]
		BelowOrEqualTo6Mm = 1,

		[RadioReportId("pel_m_100469", InstanceName = nameof(BonesFindingType.StressFracture))]
		Above6Mm = 2
	}
}
