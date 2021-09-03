using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyMRT.Domain.Enums.Abdomen
{
	public enum StatusType : byte
	{
		None = 0,

		[RadioReportId("ang_m_070336", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        NormalPerfusion = 1,

		[RadioReportId("ang_m_070337", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
		ReStenosis = 2,

		[RadioReportId("ang_m_070339", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        Occlusion = 3
	}
}
