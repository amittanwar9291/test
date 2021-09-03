using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums.Anamnesis
{
	public enum LesionType : byte
	{
		None = 0,

		[RadioReportId("anc_m_020211")]
		AchillesTendon = 1,

		[RadioReportId("anc_m_020212")]
		AnkleSprain = 2
	}
}
