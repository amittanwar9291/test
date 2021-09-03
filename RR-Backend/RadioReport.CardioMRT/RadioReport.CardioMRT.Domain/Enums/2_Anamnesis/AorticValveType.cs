using RadioReport.Common.Logic.Attributes;

namespace RadioReport.CardioMRT.Domain.Enums.Anamnesis
{
	public enum AorticValveType : byte
	{
		None = 0,

		[RadioReportId("car_m_020406")]
		TranscatheterAorticValveImplantationTAVI = 1,

		[RadioReportId("car_m_020407")]
		SurgicalReconstructionOfThe = 2,

		[RadioReportId("car_m_020408")]
		SurgicalAorticValveReplacement = 3

	}
}
