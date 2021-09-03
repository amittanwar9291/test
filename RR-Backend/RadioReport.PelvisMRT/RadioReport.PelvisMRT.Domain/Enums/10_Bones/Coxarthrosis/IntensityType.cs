using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bones
{
	public enum IntensityType : byte
	{
		None = 0,

		[RadioReportId("pel_m_100559", InstanceName = nameof(BonesFindingType.Coxarthrosis))]
		Low = 1,

		[RadioReportId("pel_m_100560", InstanceName = nameof(BonesFindingType.Coxarthrosis))]
		Moderately = 2,

		[RadioReportId("pel_m_100561", InstanceName = nameof(BonesFindingType.Coxarthrosis))]
		Distinctive = 3
	}
}
