using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Domain.Enums
{
	public enum LocalizationType : byte
	{
		None = 0,

		[RadioReportId("hip_m_060302")]
        LigamentOfTheFemoralHead = 1,

		[RadioReportId("hip_m_060303")]
        IliofemoralLigament = 2,

		[RadioReportId("hip_m_060305")]
		PubofemoralLigament = 3,

		[RadioReportId("hip_m_060306")]
        IschiofemoralLigament = 4,

		[RadioReportId("hip_m_060307")]
        TransverseAcetabularLigament = 5

	}
}
