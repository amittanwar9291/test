using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bones
{
	public enum ClassificationAccordingToARCOType : byte
	{
		None = 0,

		[RadioReportId("pel_m_100545", InstanceName = nameof(BonesFindingType.AvascularNecrosisOfTheFemoralHead))]
		ItoII = 1,

		[RadioReportId("pel_m_100546", InstanceName = nameof(BonesFindingType.AvascularNecrosisOfTheFemoralHead))]
		III = 2,

		[RadioReportId("pel_m_100547", InstanceName = nameof(BonesFindingType.AvascularNecrosisOfTheFemoralHead))]
		IV = 3
	}
}
