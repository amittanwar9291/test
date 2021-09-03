using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums.Bones
{
	public enum IntensityType : byte
	{
		None = 0,

		[RadioReportId("anc_m_0402301", InstanceName = nameof(BonesFindingType.Osteoarthritis))]
        [RadioReportId("anc_m_0402238", InstanceName = nameof(BonesFindingType.Arthritis))]
		Moderate = 1,

		[RadioReportId("anc_m_0402302", InstanceName = nameof(BonesFindingType.Osteoarthritis))]
		[RadioReportId("anc_m_0402239", InstanceName = nameof(BonesFindingType.Arthritis))]
		Marked = 2

	}
}
