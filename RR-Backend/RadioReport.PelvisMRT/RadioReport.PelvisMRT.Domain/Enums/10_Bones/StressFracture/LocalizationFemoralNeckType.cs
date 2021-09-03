using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bones
{
	public enum LocalizationFemoralNeckType : byte
	{
		None = 0,

		[RadioReportId("pel_m_100327", InstanceName = nameof(BonesFindingType.StressFracture))]
		Medial = 1,

		[RadioReportId("pel_m_100328", InstanceName = nameof(BonesFindingType.StressFracture))]
		Lateral = 2
	}
}
