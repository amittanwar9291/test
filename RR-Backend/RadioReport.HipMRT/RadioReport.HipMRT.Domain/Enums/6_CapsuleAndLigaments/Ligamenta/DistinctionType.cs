using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Domain.Enums
{
	public enum DistinctionType : byte
	{
		None = 0,

		[RadioReportId("hip_m_060402")]
        CompleteRupture = 1,

		[RadioReportId("hip_m_060403")]
		PartialRupture = 2

	}
}
