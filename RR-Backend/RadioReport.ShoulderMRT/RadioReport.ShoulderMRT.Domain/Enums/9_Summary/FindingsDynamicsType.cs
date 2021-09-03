using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum FindingsDynamicsType : byte
	{
		None = 0,

		[RadioReportId("sho_m_090202")]
		Improvement = 1,

		[RadioReportId("sho_m_090203")]
		NoChange = 2,

		[RadioReportId("sho_m_090204")]
		Deterioration = 3
	}
}
