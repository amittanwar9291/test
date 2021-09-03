using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bones
{
    public enum BursitisLimitationType : byte
    {
		None = 0,

		[RadioReportId("pel_m_1003118", InstanceName = nameof(BonesFindingType.Bursitis))]
		Smooth = 1,

		[RadioReportId("pel_m_1003119", InstanceName = nameof(BonesFindingType.Bursitis))]
		Illdefined = 2,

		[RadioReportId("pel_m_1003120", InstanceName = nameof(BonesFindingType.Bursitis))]
		Rupture = 3
	}
}
