using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Domain.Enums
{
	public enum MorphologyType : byte
	{
		None = 0,

		[RadioReportId("hip_m_050321")]
        CAM = 1,

		[RadioReportId("hip_m_050324")]
        Pincer = 2

	}
}
