using RadioReport.Common.Logic.Attributes;

namespace RadioReport.CardioMRT.Domain.Enums.Anamnesis
{
	public enum MitralValveType : byte
	{
		None = 0,

		[RadioReportId("car_m_020410")]
		SurgicalReconstructionOfThe = 1,

		[RadioReportId("car_m_020411")]
		SurgicalMitralValveReplacement = 2,

		[RadioReportId("car_m_020412")]
		ReconstructionWithClipProcedure = 3

	}
}
