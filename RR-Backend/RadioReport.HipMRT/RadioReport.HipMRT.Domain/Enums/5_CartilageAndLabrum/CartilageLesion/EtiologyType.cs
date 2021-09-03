using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Domain.Enums
{
	public enum EtiologyType : byte
	{
		None = 0,

		[RadioReportId("hip_m_050310")]
		Traumatic = 1,

		[RadioReportId("hip_m_050311")]
		Degenerative = 2

	}
}
