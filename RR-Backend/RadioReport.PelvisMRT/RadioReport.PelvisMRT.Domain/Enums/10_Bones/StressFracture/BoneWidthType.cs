using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bones
{
	public enum BoneWidthType : byte
	{
		None = 0,

		[RadioReportId("pel_m_100331", InstanceName = nameof(BonesFindingType.StressFracture))]
		Below50Percent = 1,

		[RadioReportId("pel_m_100332", InstanceName = nameof(BonesFindingType.StressFracture))]
		EqualToOrAbove50Percent = 2
	}
}
