using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bones
{
	public enum ExpansionType : byte
	{
		None = 0,

		[RadioReportId("pel_m_100359", InstanceName = nameof(BonesFindingType.Coxarthrosis))]
		Focal = 1,

		[RadioReportId("pel_m_100360", InstanceName = nameof(BonesFindingType.Coxarthrosis))]
		Diffuse = 2
	}
}
